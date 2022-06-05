import cogoToast from 'cogo-toast';
class ValidationHelper{
    //CHECK EMPTY
    isEmpty(value){
        if(value.length===0){
            return true;
        }
        else{
          return false;
        }
    }
     eamilValidation(value){
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)){
            return true;
        } else{
            return false;
        }
     }
    //SUCCESS MESSAGE 
    successToast(msg){
        cogoToast.success(msg)
    }

    //ERROR MESSAGE
    errorToast(msg){
        cogoToast.error(msg)
    }

}

export const {isEmpty,successToast, errorToast, eamilValidation } =new ValidationHelper;