import pjson from '../package.json'

function useAppVersion() {
	const appVersion = pjson.version

	return { appVersion: appVersion }
}

export default useAppVersion
