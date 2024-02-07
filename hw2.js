var prompt = require('prompt');
prompt.start();

var schema = {
  properties: {
    year: {
      description: 'Введіть рік народження',
      pattern: /^[^0-9-]?[0-9]{4}$/,
      message: 'Будь ласка введіть позитивние 4 значне число',
      required: true
    }
  }
};

prompt.get(schema, function(err, result) {
    var age = 2024 - result.year;
    console.log(age)
    var string;
  if (age%10==1 && (age%10<10 || age%10>=20)) {
    var string = 'рік'
  } else if(age%10>=2 && age%10<=4 && (age%10<10 || age%10>=20)){
    var string = 'роки'
  } else{
    string = 'років'
  }

  console.log('Ваш вік : ', age + ' ' + string);
});