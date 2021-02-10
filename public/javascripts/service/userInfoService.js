import {BaseRestService} from "./restService.js";

export class UserInfoService {
    constructor() {
        this.userInfoPath = "userinfo/";
        this.restService = new BaseRestService();
    }

    checkUserRole = function (user, role) {
        return this.restService.fetch(this.userInfoPath + `check/${user}/role/${role}/`);
    };
    checkUserRole2 = function (user, role) {
        return this.restService.fetch(this.userInfoPath + `check/${user}/role/${role}/`, {},
            {
                success: function (data, status, xhr) {
                    alert(JSON.stringify(data));
                }
            });
    };
};


