import Route from '@ember/routing/route';

export default class EmprestimoRoute extends Route {
    model(){
        const emprestimo = [{ valor: 200}, {valor: 300}];
        return emprestimo;
    }
}
