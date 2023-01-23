import {phones} from './-smartphones.mjs';
import { computo } from './-computo.mjs';
import { tvs } from './-Tvs.mjs';

const smartphones = document.querySelector('.smartphones')

smartphones.innerHTML = `<img src='${tvs[9].image}'/>`
