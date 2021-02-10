import "../jquery.js";
/**
 * the methods exposed by rest service can be used with a callback or with JQuery deferred:
 * Callback example:
 * <code>
 *  fetch("userInfo",{},{success:function(result){...},error: function(err){...}};
 * </code>
 * jQuery Deferred (Promise) example: adding callback to the deferred queue
 * <code>
 *  fetch("userInfo").then(function(data){alert(data)},function(errorMessage){...});
 * </code>
 * @constructor
 */
export class BaseRestService {

    basePath = "/";
    constructor(){
        // default option values
        let defaultDataType = "json";
        let defaultContentType = "application/json; charset=utf-8";
        let defaultTimeout = 10000;

        let defaultSuccessCallback = function (data, status, xhr) {   // success callback function
            return data;
        };
        let defaultErrorCallback = function (jqXhr, status, error) { // error callback
            console.log('defaultErrorCallback: ', error);
            return error;
        };
        this.defaultAjaxOptions = {
            dataType: defaultDataType,
            contentType: defaultContentType,
            timeout: defaultTimeout, // not used
            success: defaultSuccessCallback,
            error: defaultErrorCallback,
        };
    }

    updateOptions = function (defaultAjaxOptions, ajaxOptions) {
        let options = Object.assign({}, defaultAjaxOptions, ajaxOptions);
        return options;
    };

    fetch = function(url, data, ajaxOptions) {
        let options = this.updateOptions(this.defaultAjaxOptions, ajaxOptions);

        return $.ajax(this.basePath + url,
            {
                type: 'GET',  // http method
                data: data,
                dataType: options.dataType,
                contentType: options.contentType,
                success: options.success,
                error: options.error
            });
    };
    post = function (url, data, ajaxOptions) {
        let options = this.updateOptions(this.defaultAjaxOptions, ajaxOptions);

        return $.ajax(this.basePath + url, {
            type: 'POST',  // http method
            data: JSON.stringify(data),  // data to submit
            dataType: options.dataType,
            contentType: options.contentType,
            success: options.success,
            error: options.error
        });
    };
    put = function(url, data, ajaxOptions) {
        let options = this.updateOptions(this.defaultAjaxOptions, ajaxOptions);

        return $.ajax(this.basePath + url, {
            type: 'PUT',  // http method
            data: JSON.stringify(data),  // data to submit,
            dataType: options.dataType,
            contentType: options.contentType,
            success: options.success,
            error: options.error
        });
    };
    delete = function(url, data, ajaxOptions) {
        let options = this.updateOptions(this.defaultAjaxOptions, ajaxOptions);

        return $.ajax(this.basePath + url, {
            type: 'DELETE',  // http method
            dataType: options.dataType,
            contentType: options.contentType,
            success: options.success,
            error: options.error
        });
    };
};
