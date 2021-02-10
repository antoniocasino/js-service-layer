import {UserInfoService} from './service/userInfoService.js';

new UserInfoService().checkUserRole("antonio","admin").then(console.log, console.error);
new UserInfoService().checkUserRole2("antonio","admin").then(console.log, console.error);

