import { cp_header } from "./compnent_header.js"
import { cp_perfil } from "./compnent_perfil.js"
import { cp_projectos } from "./component_projects.js"
import { repa } from "./component_repa.js"
let root = document.querySelector(".root")

root.innerHTML = `
    <div class="header">${cp_header}</div>
    <div class="perfil">${cp_perfil}</div>
    <div class="project">${cp_projectos}</div>
    <div class="reparaciones">${repa}</div>
`