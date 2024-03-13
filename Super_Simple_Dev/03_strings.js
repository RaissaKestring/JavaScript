'string = qualquer texto'
typeof 'hello'
'string'

'hello' + 3
'hello3'

'$' + 20.95 + 7.99
'$20.957.99'

'--> Math.round = arredonda um numero'
'$' + Math.round(20.95 + 7.99)
'$29'

'--> Para calculo de dinheiro'
'se usarmos . o numero fia preciso demais e nao exato'
'$' + (20.95 + 7.99)
'$28.939999999999998'

'--> se nao usarmos, nao e correto'
'$' + (2095 + 799) 
'$2894'

'--> entao, tiramos o ponto e ao final do calculo, dividimos o tota por 100'
'$' + (2095 + 799) / 100
'$28.94'

'--> calculo total dos itens'
'- errado'
'items (' + 1 + 1 + ')'
'items (11)'

'- correto'
'items' (1 + 1)
'items (2)'

'items (' + (1 + 1) + '): $' + (2095 + 799) / 100
'items (2): $28.94'

'--> modos de criar string'

'string'
"string"

'--> nao podemos usar somente um apostrofo para criar a frase: '
"i'm learning JavaScript"

"entao nesse caso, usamos dois apostrofos"

'--> o simbolo de acento agudo ao iniciar a string, sifrao e chaves ao adicionar valores, nos permite adicionar valores diretamente dentro da string'
'por exemplo: '
`Items (${1 + 1}): $${(2095 + 799) / 100}`
'Items (2): $28.94'

'ao inves de: '
'items (' + (1 + 1) + '): $' + (2095 + 799) / 100
'items (2): $28.94'

'recomenda-se utilizar um apostrofo,  esomente utilizar acento agudo quando precisarmos fazer uso de interpolação'