import type { Plugin, Project } from '@yarnpkg/core'
import { formatUtils, MessageName, structUtils } from '@yarnpkg/core'
import type { InstallOptions } from '@yarnpkg/core/lib/Project'
import { ppath, xfs } from '@yarnpkg/fslib'

export const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project, { report }: InstallOptions) {
      await report.startTimerPromise('Sync workspaces', async () => {
        const tspacePath = ppath.join(project.cwd, 'tsconfig.json')

        if (!(await xfs.existsPromise(tspacePath))) {
          return
        }

        try {
          const tsworkspaces = await xfs.readFilePromise(tspacePath, 'utf8').then(JSON.parse)

          const rootWorkspace = project.tryWorkspaceByCwd(project.cwd)

          if (!rootWorkspace) {
            return
          }

          const previousPaths = Object.keys(tsworkspaces.compilerOptions.paths ?? {})

          tsworkspaces.compilerOptions.paths = {}
          const { paths } = tsworkspaces.compilerOptions

          const added: string[] = []

          project.workspaces
            .filter((ws) => ws.cwd !== project.cwd && ws.manifest.name.scope !== 'private')
            .forEach(({ relativeCwd, manifest: { name } }) => {
              if (name) {
                const stringifiedName = structUtils.stringifyIdent(name)
                paths[stringifiedName] = [relativeCwd]
                if (!previousPaths.includes(stringifiedName)) {
                  added.push(stringifiedName)
                }
              }
            })

          const actualPaths = Object.keys(paths)

          const removed = previousPaths.filter((path) => !actualPaths.includes(path))

          added.forEach((item) => {
            report.reportInfo(MessageName.UNNAMED, formatUtils.pretty(project.configuration, `+ ${item}`, 'ADDED'))
          })

          removed.forEach((item) => {
            report.reportInfo(MessageName.UNNAMED, formatUtils.pretty(project.configuration, `- ${item}`, 'REMOVED'))
          })

          await xfs.writeFilePromise(tspacePath, `${JSON.stringify(tsworkspaces, null, 2)}\n`)
        } catch (e: any) {
          report.reportError(
            MessageName.UNNAMED,
            `Не удаётся распознать файл tsconfig.json. Убедитесь, что он соответствует формату json. Например не содержит завершающей запятой. ${e.message}`,
          )
        }
      })
    },
  },
}
