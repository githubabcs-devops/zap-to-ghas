import { DefaultArtifactClient } from '@actions/artifact'

async function uploadSarifArtifact(filename: string): Promise<void> {
  const artifactClient = new DefaultArtifactClient()
  const artifactName = 'zap-sarif-report'
  const files = [filename]

  const rootDirectory = '.' // Also possible to use __dirname
  const options = { }

  // Handle the UploadResponse object
  const {id, size} = await artifactClient.uploadArtifact(
    artifactName,
    files,
    rootDirectory,
    options
  )

  console.log(`Created artifact with id: ${id} (bytes: ${size}`)
}

export default uploadSarifArtifact
