import Controller from '@ember/controller';

export default class EmprestimoController extends Controller {
    get subtotal() {
        return 588;
    }
    get juros(){
        return 0.09 * this.subtotal;
    }
    get total(){
        return this.subtotal + this.juros;
    }
}

