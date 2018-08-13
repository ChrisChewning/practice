PYTHON

//COMMAND LINE
to get to the command line: python3
to exit the command line: >>> exit()


//COMMENT
1. to comment out use #
example.  # message = "we are the party potensh!"


//NO CAMEL CASE
2. dont use camel case. instead:   first_name = 'timothy'

example...

def publish(self): //function/method. publish is the name of method.
      self.published_date = timezone.now() //indent methods inside the class.
      self.save()

The naming rule is that we use lowercase and underscores instead of spaces. For example, a method that calculates average price could be called calculate_average_price.


//METHODS
3.  .title() is an inherent method that capitalizes the first lettrer of the value you gave it.

4.  .upper() capitalizes ex: "chris".upper()

5. len("Chris") outputs 5.


//STRINGS AND INTEGERS

The str function converts things into strings
ex: len(str(304023))
6

The int function converts things into integers


//VARIABLES
//for variables just write it out. there is no let or const or var?
>>> city = "Tokyo" //variable is Tokyo.

>>> ctiy //error message is:
// Traceback (most recent call last):
//   File "<stdin>", line 1, in <module>
// NameError: name 'ctiy' is not defined


//PRINT
>>> name = "Maria"
>>> name
'Maria' //shows the variable in single quotes.
>>> print(name)
Maria //prints out the variable.


//LISTS are arrays.
lottery = [3, 42, 12, 19, 30, 59] //is a list called lottery.
len(lottery) //6

//SORT
lottery.sort()
lotter.print //3,12,19,30,42,59

//REVERSE
lottery.reverse()
print(lottery)
[59, 42, 30, 19, 12, 3]


//APPEND
>>> lottery.append(199)
>>> print(lottery)
[59, 42, 30, 19, 12, 3, 199]


//INDEX
print(lottery[0]) //59


//REMOVE: POP
// To delete something from your list you will need to use indexes and the pop() method.
lottery.pop(0) //59
print(lottery)
[42, 30, 19, 12, 3, 199]

//============================ DICTIONARIES ==============================


//DICTIONARIES  {}
// A dictionary is similar to a list, but you access values by looking up a key instead of a numeric index. A key can be any string or number.

//variable participant with 3 key:value pairs.
participant = {'name': 'Ola', 'country': 'Poland', 'favorite_numbers': [7, 42, 92]}

example...
print(participant['name'])  //Ola

// WHEN TO USE A DICTIONARY?
// - for an ordered sequence of items.
// - to associate values with keys, so you can look them up efficiently (by key) later on.

//note: they ar mutable. you can add key-value pairs afterwards.
// ex:
>>> participant['favorite_language'] = 'Python'

>>> len(participant) //4 b.c it is checking for key:value pairs.

>>> participant.pop('favorite_numbers') //[7, 42, 92]
>>> participant //{'country': 'Poland', 'favorite_language': 'Python', 'name': 'Ola'}




//============================ COMPARISONS ==============================

>>> 5 > 2 //True
>>> 3 < 1 //False
>>> 5 > 2 * 2 //True
>>> 1 == 1 //True. Remember not =
>>> 5 != 2 //True

>>> 6 >= 12 / 2
True
>>> 3 <= 2
False

>>> 6 > 2 and 2 < 3 //True  not &&
>>> 3 > 2 and 2 < 1 // False
>>> 3 > 2 or 2 < 1 // True not ||


//============================ ELIF STATEMENTS ==============================

if 3 > 2:
    print('It works!') //has to be tabbed for it to see if it's true.


    name = 'Sonja'
if name == 'Ola':
    print('Hey Ola!')
elif name == 'Sonja':
    print('Hey Sonja!')
else:
    print('Hey anonymous!')


// Change the volume if it's too loud or too quiet
if volume < 20 or volume > 80:
  volume = 50
  print("That's better!")

  print('Hello, Django girls!')


  name = 'Sonja'
  if name == 'Ola':
      print('Hey Ola!')
  elif name == 'Sonja':
      print('Hey Sonja!')
  else:
      print('Hey anonymous!')

  #in the terminal it prints Hello, Django girls. (next line) Hey Sonja!
  #note: if else is the same as in js. elif is else if.


  //============================ FUNCTIONS ==============================


  def hi():  //def is the same as js function
      print('Hi there!')
      print('How are you?')

  hi()



//If you get a NameError, that probably means you typed something wrong, so you should check that you used the same name when creating the function with def hi(): and when calling it with hi().

//If you get an IndentationError, check that both of the print lines have the same whitespace at the start of a line: python wants all the code inside the function to be neatly aligned.

//If there's no output at all, check that the last hi() isn't indented - if it is, that line will become part of the function too, and it will never get run.



//NEXT EXAMPLE
//Remember: The print function is indented four spaces within the if statement. This is because the function runs when the condition is met. Let's see how it works now:


  def hi(name):
      if name == 'Ola':
          print('Hi Ola!')
      elif name == 'Sonja':
          print('Hi Sonja!')
      else:
          print('Hi anonymous!')

  hi('Ola')


//CONCATENTATION IS THE SAME

def hi(name):
    print('Hi ' + name + '!')

hi("Rachel")



//============================ LOOPS ==============================

def hi(name):
    print('Hi ' + name + '!')

girls = ['Rachel', 'Monica', 'Phoebe', 'Ola', 'You'] //'list' of girls
for name in girls:
    hi(name) //notice indentation.
    print('Next girl')

// And when we run it:
// command-line
// $ python3 python_intro.py
// Hi Rachel!
// Next girl
// Hi Monica!
// Next girl
// Hi Phoebe!
// Next girl
// Hi Ola!
// Next girl
// Hi You!
// Next girl


//LOOPING NUMBERS

// You can also use for on numbers using the range function:
//FOR IN or FOR ON?

python_intro.py
for i in range(1, 6):
    print(i)
Which would print:

command-line
1
2
3
4
5


//============================== DOC STRINGS ==========================

Lines between triple quotes (''' or """) are called docstrings – you can write them at the top of a file, class or method to describe what it does. They won't be run by Python.
