# ProjectAcademy

Repositorio de un desafio que simula una vista de perfil. El desafio esta hecho con React y Tailwind.

La vista en desktop esta compuesta por un componente con los datos personales del usuario, su foto de perfil, tres componentes con un call to action que permitirian al usuario ir hacia otras vistas y un header y un footer que permitirian al usuario navegar dentro de la plataforma.
En las vistas de tablet y mobile el header y el footer son reemplazados por un header con un menu hamburguesa.

Para el componente con los datos personales del usuario cree dos alternativas, una es UserData, la cual esta hecha en base a la imagen de referencia de manera mas estricta, la otra es AltUserData, la cual permitiria al usuario editar sus datos, y gestiona mediante un estado si se muestra un componente con los datos estaticos (ShowUserData) o con un formulario para editarlos (EditUserData).

### Verificacion de formularios

Para la verificacion de EditUserData se creo un custom hook.

**_Argumentos del hook_** El hook recibe dos argumentos, el primero, formValues, debe ser un array que contega los valores de los inputs a verificar, el segundo, validations, debe ser un array de objetos con el id y el tipo de valor que se verifica, tambien se pueden agregar propiedades extra para realizar mas validaciones.
Ambos arrays deben contener la misma cantidad de indices, y el indice con el valor a validar debe coincidir con el indice de sus validaciones.
Las validaciones de los formularios ya creadas se encuentran en la carpeta verificationArguments.

**_Verificacion de Inputs_** Dentro del hook hay una funcion llamada handleVerificationInput que valida cada input que se incluya en los argumentos que recibe el hook. Hay validaciones que se realizan por default, por ejemplo, la verificacion del formato de los inputs de tipo email, y otras que se realizan dinamicamente segun si en el objeto de las validaciones hay cierta propiedad y segun el valor de la misma.

**_Propiedades_**

-**mustHaveNumbers**: Booleano. Verifica si el valor del input debe incluir numeros.

-**onlyNumbers**: Booleano. Verifica que el valor del input tenga solo numeros.

-**cantHaveNumbers**: Booleano. Verifica que el valor del input no incluya numeros.

-**cantHaveSpecialChar**: Booleano. Verifica que el valor del input no tenga simbolos especiales.

-**noSpaces**: Booleano. Verifica que el valor del input no tenga espacios.

-**minLength**: Int. Verifica que el valor del input tenga al menos la cantidad de caracteres indicada.

-**maxLength**: Int. Verifica que el valor del input no supere la cantidad de caracteres indicada.
