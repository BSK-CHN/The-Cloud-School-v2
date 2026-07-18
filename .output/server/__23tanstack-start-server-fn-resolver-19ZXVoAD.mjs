//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-19ZXVoAD.js
var manifest = {
	"c068662c9c1a513f3d5b10451290b0fe8bd96c4d9086d5412fdc88fe35ce8029": {
		functionName: "submitContact_createServerFn_handler",
		importer: () => import("./_ssr/contact-CRkWYdeu.mjs")
	},
	"d87811802ea07968ee979f3b78da67d8d737f64864674d86cdf70eb4048c4abb": {
		functionName: "submitConsultation_createServerFn_handler",
		importer: () => import("./_ssr/consultation-Cy6glVGK.mjs")
	},
	"df4735ae4d7feabce25275ff4d6022c5143259955c86e4168d84c41c5145e5dd": {
		functionName: "submitWorkshop_createServerFn_handler",
		importer: () => import("./_ssr/workshop-CzDmAFzq.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
