import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../../services/http/http.service";
import { BrandModel, brandModel } from "./brand/brand.model";
import { SignUpModel, signUpModel } from "./signUp/SignUp.model";



export interface AppStoreModel{
brandModel: BrandModel;
signUpModel: SignUpModel;
}
export const appStoreModel: AppStoreModel ={
   brandModel : brandModel,
   signUpModel: signUpModel
}


