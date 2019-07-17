type info = {
  name: string;
  surname: string;
};

function sayHello(params: info) {
  console.log(`Hello dear ${params.name} ${params.surname}`);
}

sayHello({ name: 'Olivier', surname: 'Thomas' });
