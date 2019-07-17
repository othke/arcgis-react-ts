type info = {
  name: string;
  surname: string;
};

function sayHello(params: info) {
  console.log(`Hello ${params.name} ${params.surname}`);
}

sayHello({ name: 'Olivier', surname: 'Thomas' });
