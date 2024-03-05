//Definición de la clase CuentaBancaria
class CuentaBancaria {
    //Constructor especial que se llama automáticamente cuando se crea un nuevo objeto de la clase
    constructor(numeroCuenta, saldo, propietario) {
        //Se maneja "this" que va hacer referencia al obbjeto creado
        //this.numeroCuenta se refiere a la propiedad numeroCuenta del objeto actual que se está creando a partir de la clase CuentaBancaria. 
        this.numeroCuenta = numeroCuenta;//Parametro que representaria el numero de cuenta 
        this.saldo = saldo;//Parametro que indica el saldo inicial de la nueva cuenta
        this.propietario = propietario;//Parametro que representa el dueño de la cuenta
    }
    // Método para depositar dinero
    depositar(cantidad) {
        //En el método depositar de la clase CuentaBancaria se utiliza para lanzar una excepción en caso de que se intente llamar al método depositar directamente en una instancia de CuentaBancaria en lugar de en una instancia de una clase hija que lo haya implementado.
        throw new Error("El método depositar debe ser implementado por las clases hijas.");
    }
    // Método para retirar dinero
    retirar(cantidad) {
      //Este método lanza una excepción indicando que debe ser implementado por las clases hijas, Esto garantiza que cualquier clase que herede de CuentaBancaria deberá proporcionar su propia implementación del método retirar.        
        throw new Error("El método retirar debe ser implementado por las clases hijas.");
    }
  }
  // Definición de la clase CuentaAhorro
  //Se establace la relacion de herencia de propiedades de "Cuenta de Ahorro" a "CuentaBancaria" con la palabra extend
  class CuentaAhorro extends CuentaBancaria {
    //Creación de la estancia de la clase hija que se inicializa tres parametros para una cuenta de ahorro
    //Se utiliza la palabra super() para llamar el constructor padre "CuentaBancaria", esto asegura que las propiedades numeroCuenta, saldo y propietario se inicialicen correctamente en la instancia de CuentaAhorro
    constructor(numeroCuenta, saldo, propietario) {
        super(numeroCuenta, saldo, propietario);
    }
    // Implementación del método depositar para CuentaAhorro
    depositar(cantidad) {
        //Incremento de saldo
        this.saldo += cantidad;
        console.log(`Se depositaron ${cantidad} unidades en la cuenta de ahorro. Saldo actual: ${this.saldo}`);
    }
    // Implementación del método retirar para CuentaAhorro
    retirar(cantidad) {
        //Verificación si el saldo es suficiente, condición si la cantidd que desea retirar es mayor que el saldo disponible.
        if (cantidad > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            //Resta la cantidad especifica del saldo actual de la cuenta de ahorro
            this.saldo -= cantidad;
            console.log(`Se retiraron ${cantidad} unidades de la cuenta de ahorro. Saldo actual: ${this.saldo}`);
        }
    }
  }

  // Definición de la clase CuentaCorriente
  class CuentaCorriente extends CuentaBancaria {
    //Creación de constructor de clase hija
    //numeroCuenta, saldo, y propietario se pasan a la clase base CuentaBancaria usando super().
    //sobregiro se asigna a la propiedad sobregiro de la cuenta corriente para establecer el límite de sobregiro.
    //sobregiroUtilizado se inicializa en 0 para rastrear la cantidad de sobregiro que se ha utilizado.
    constructor(numeroCuenta, saldo, sobregiro, propietario) {
        super(numeroCuenta, saldo, propietario);
        this.sobregiro = sobregiro; // Establece el límite de sobregiro para la cuenta corriente
        this.sobregiroUtilizado = 0; // Inicializa el sobregiro utilizado en 0
    }

    // Implementación del método depositar para CuentaCorriente
    depositar(cantidad) {
        //Incremento de saldo
        this.saldo += cantidad;
        console.log(`Se depositaron ${cantidad} unidades en la cuenta corriente. Saldo actual: ${this.saldo}`);
    }

    // Implementación del método retirar para CuentaCorriente
    retirar(cantidad) {
        // Calcula el saldo total disponible para la cuenta corriente, incluyendo el sobregiro
        const saldoDisponible = this.saldo + this.sobregiro - this.sobregiroUtilizado;
        //Se verifica si la cantidad que se desea retirar (cantidad) es mayor que el saldo total disponible (saldoDisponible). Si es mayor, significa que no hay suficientes fondos en la cuenta para realizar el retiro, incluso considerando el sobregiro.
        if (cantidad > saldoDisponible) {
            console.log("No es posible realizar el retiro. Saldo insuficiente y excede el límite de sobregiro.");
        } 
        //Se valida la cantidad es mayor que se desea retirar al saldo actual utilizando el límite de sobregiro
            else if (cantidad > this.saldo) {
                //Calculamos la cantidad de sobregiro que se utilizará
                const sobregiroUtilizado = cantidad - this.saldo;
                this.saldo = 0;
                this.sobregiroUtilizado += sobregiroUtilizado; // Actualiza el sobregiro utilizado
                console.log(`Se utilizó el límite de sobregiro. Se retiraron ${sobregiroUtilizado} unidades de sobregiro.`);
                console.log(`Saldo actual después del sobregiro: ${this.saldo}`);
        } else {
            //Se restar la cantidad especificada del saldo actual de la cuenta corriente después de que se ha verificado que hay suficientes fondos disponibles para realizar el retiro.
            this.saldo -= cantidad;
            console.log(`Se retiraron ${cantidad} unidades de la cuenta corriente. Saldo actual: ${this.saldo}`);
        }
    }

}
  

  // Ejemplo de uso de las clases CuentaAhorro y CuentaCorriente

   /*Ejemplo de crea una nueva cuenta la clase hija "CuentaAhorro"*/
   //const cuentaAhorro = new CuentaAhorro("AH-123456", 1000, "Eduardo Ceja");
   //console.table(cuentaAhorro);
  
   /*Ejemplo de hacer deposito a la cuenta la clase hija "CuentaAhorro"*/
   //const cuentaAhorro = new CuentaAhorro("AH-123456", 1000, "Eduardo Ceja");
   //cuentaAhorro.depositar(500); //
   //console.table(cuentaAhorro);
 
   /*Ejemplo de como retirar a la cuenta la clase hija "CuentaAhorro"*/
  //const cuentaAhorro = new CuentaAhorro("AH-123456", 1000, "Eduardo Ceja");
  //cuentaAhorro.depositar(500); //
  //console.table(cuentaAhorro);
  //cuentaAhorro.retirar(200);
  //console.table(cuentaAhorro);

  /*Ejemplo de validación cuando el saldo es insuficiente para retirar en la clase hija "CuentaAhorro"*/
  //const cuentaAhorro = new CuentaAhorro("AH-123456", 1000, "Eduardo Ceja");
  //cuentaAhorro.retirar(2000);
  //console.table(cuentaAhorro);
  
  /*Ejemplo de crea una nueva cuenta la clase hija "CuentaCorriente"*/
  //const cuentaCorriente = new CuentaCorriente("CC-789012", 2000, 5000, "Genesis Ceja");

  /*Ejemplo de hacer deposito a la cuenta la clase hija "CuentaCorriente"*/  
  //const cuentaCorriente = new CuentaCorriente("CC-789012", 2000, 500, "Genesis Ceja");
  //console.table(cuentaCorriente)
  //cuentaCorriente.depositar(1000);
  //console.table(cuentaCorriente)

  /*Ejemplo de como retirar a la cuenta la clase hija "CuentaCorriente"*/
  //const cuentaCorriente = new CuentaCorriente("CC-789012", 2000, 500, "Genesis Ceja");
  //console.table(cuentaCorriente)
  //cuentaCorriente.retirar(1000);
  //console.table(cuentaCorriente)
  
  /*Ejemplo de como retirar a la cuenta la clase hija "CuentaCorriente" tomando en concideración el sobregiro*/
  const cuentaCorriente = new CuentaCorriente("CC-789012", 2000, 5000, "Genesis Ceja");
  console.table(cuentaCorriente)
  cuentaCorriente.retirar(600);
  console.table(cuentaCorriente)

