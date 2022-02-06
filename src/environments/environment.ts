import {environment as prodEnviroment} from './environment.prod';

export const environment = {
  ...prodEnviroment,
  production: false,
};
