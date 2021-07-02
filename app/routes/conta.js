import Route from '@ember/routing/route';

export default class ContaRoute extends Route {
    model(params){
        const{
            conta_id
        } = params;
       return conta_id; 
    }
}
