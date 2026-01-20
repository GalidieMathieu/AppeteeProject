import { Ingredients,Configuration, ConfigurationParameters, IngredientsApi } from '../API/index';

export abstract class Param{
    public static baseUrl = 'http://10.0.2.2:4000';
    public static ServerUrl = 'http://appeteetest.herokuapp.com';
    public static confParam : ConfigurationParameters  = {basePath:'http://10.0.2.2:4000',apiKey:'vC$!Y0CEnMjyT07E&$66lYkyN^G4Zd$C8#0sV1wVzeqn%I@8LY'};
    public static sessionKey = 'vC$!Y0CEnMjyT07E&$66lYkyN^G4Zd$C8#0sV1wVzeqn%I@8LY';
    //public static configuration : Configuration  = new Configuration(Param.confParam);
}