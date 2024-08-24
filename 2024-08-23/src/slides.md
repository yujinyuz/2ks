---
# You can also start simply with 'default'
theme: default
title: Python Metaprogramming
drawings:
  persist: false
transition: slide-left
mdc: true
lineNumbers: true
layout: intro
favicon: https://jinyuz.dev/favicon.ico
---

# Python Metaprogramming

From Muggle to Wizard
<span class="text-3xl">🧙</span>

<div class="absolute bottom-10">
  <span class="font-700">
    @yujinyuz
  </span>
</div>

---
layout: section
---

# <span class="blink text-green500">>_ </span>whoami

<style>
.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

---
layout: default
---

# <span class="blink text-green500">>_ </span>whoami

<v-clicks depth="2">

- Eugene Oliveros
- Software Engineer @ Process Shepherd
- Enthusiast of open-source and micro-optimizations
  - Mouseless
  - QWERTY -> Colemak
  - `len('Yujin') == 5`
  - `len('Yuj') == 3`
- Purrdad 🐈 🐈 🐈

</v-clicks>

<style>
ul {
  list-style: disc;
}

.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

---
layout: section
---

# Metaprogramming

---
transition: slide-left
---

# Metaprogramming

> Metaprogramming is a computer programming technique in which computer programs have the ability
> to treat other programs as their data. It means that a program can be designed to read, generate,
> analyse, or transform other programs, and even modify itself, while running.
>
> Reference: https://en.wikipedia.org/wiki/Metaprogramming

<v-click>

_code that writes code_ at runtime

</v-click>

<v-click>

## So is it AI?

</v-click>

<v-click>

NO. Metaprogramming is not AI.

> While AI analyzes data to learn and make predictions, metaprogramming manipulates code itself.
> It's more about code generation and dynamic behavior, not machine learning.

</v-click>

---
transition: slide-up
---

# Metaprogramming

<v-clicks>

* Dynamic Code Execution
* Decorators
* Introspection
* Metaclasses
* Descriptors
* Practical use cases

</v-clicks>

---
transition: slide-up
---

# Dynamic Code Execution

<v-click>

### exec() & eval()

</v-click>

<br>

<v-clicks>

* exec &mdash; executes a block of python code
* eval &mdash; evaluates a single python expression

</v-clicks>

<v-click>

<br><br>

> Please don't use this unless you know what you're doing

</v-click>

---
layout: default
---

# Dynamic Code Execution: Demo

### exec()
<br>

````md magic-move {lines: true}
```python {*|5|*}
code = """
def greeter(name):
  return f"Hello, {name}!"
"""
print(greeter("Yujin"))  # Output: NameError: name 'greeter' is not defined
```

```python {5|6|*}
code = """
def greeter(name):
  return f"Hello, {name}!"
"""
exec(code)
print(greeter("Yujin"))  # Output: Hello, Yujin!
```
````

---
layout: default
---

# Dynamic Code Execution: Demo

### eval()
<br>

````md magic-move {lines: true}
```python {*|2|*}
result = eval("1+1 * 5")
print(result)  # Output: 6
```

```python {*}

user_input = "__import__('os').system('rm -fr *')"
eval(user_input)  # Deletes files if executed

```
````

<br><br>

<div v-click class="text-sm bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p class="font-bold">Potential Security Risks</p>
  <p>Avoid using `exec()` and `eval()` in untrusted code environments as they can lead to code injection attacks.</p>
</div>

---
layout: section
---

# Decorators

---

# Decorators

<v-clicks>

* function that takes another function and extends its behavior without explicitly modifying it
* a.k.a _Higher Order Functions_
* a.k.a Closures

</v-clicks>

---

# Decorators: Demo

Decorators using functions

````md magic-move
```python {*|3,12|13,4-9|6,9|10|*}
import time

def apply_timer(func):
  def wrapper(*args, **kwargs):
    start_time = time.time()
    res = func(*args, **kwargs)
    end_time = time.time()
    print(f"function {func.__name__} took {end_time-start_time} second(s).")
    return res
  return wrapper

@apply_timer
def get_user():
    time.sleep(3)
    # some process here
    print('Successfully fetched user')

get_user()
```

```sh {*}{lines: false}
Successfully fetched user
function get_user took 3.0004289150238037 second(s).
```
````

---

# Decorators

Decorators using class

````md magic-move
```python {*|2-3,9|5-6,13}
class stronger:
  def __init__(self, func):
    self.func = func

  def __call__(self, *args, **kwargs):
    return f"<strong>{self.func(*args, **kwargs)}</strong>"

@stronger
def greeter(name):
  return f"Hello, {name}"

print(greeter("Yujin"))
```

```sh {*}{lines: false}
<strong>Hello, Yujin</strong>
```
````

---

# Decorators

Decorators with custom arguments

<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  <p class="font-bold">Code too long!</p>
  <p class="text-sm">See <a
  href="https://github.com/yujinyuz/mubo/blob/demo/decorators_with_args.py" target="_blank">decorators_with_args.py</a></p>
</div>

---

# Decorators: Demo

Tip: Prefer using `functools.wraps` when creating python decorators

* preserves the original function's metadata like name and docstring

---
layout: default
---

# Decorators: Demo

Without wraps

````md magic-move
```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper

@my_decorator
def say_hello():
    """This function says hello."""
    print("Hello!")

print(say_hello.__name__)  # Output: wrapper
print(say_hello.__doc__)   # Output: None
```
````

---

# Decorators: Demo

With wraps

````md magic-move
```python
from functools import wraps

def say_hello_with_wraps(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper

@say_hello_with_wraps
def say_hello():
    """This function says hello."""
    print("Hello!")

print(say_hello.__name__)  # Output: say_hello
print(say_hello.__doc__)   # Output: This function says hello.
```
````

---
layout: section
---

# Introspection

---

# Introspection

<v-click>

refers to the ability of a program to examine the type or properties of an object at runtime

</v-click>

<br>
<v-click>
methods
</v-click>

<br>

<v-clicks>

* `dir(obj)` &mdash; list methods/attributes of an object. Useful for debugging, too!
* `hasattr(obj, 'attr')` &mdash; check if an attribute exists
* `setattr(obj, 'prop', 'value')` &mdash; sets the attribute. Equivalent of `Class.foo = 'bar'`
* `getattr(obj, 'prop')` &mdash; gets an attribute. Equivalent of `Class.foo`
* `isinstance(obj, SomeClass)` &mdash; performs a check on whether an object is of the same type provided

</v-clicks>

<v-click>

<br><br>

> The methods used here interact with Python's "dunder" methods (like `__getattr__`, `__setattr__`,
> etc.), which are special magic methods that handle these operations under the hood.

</v-click>

---

# Introspection: Demo

````md magic-move
```python
class Wizard:
    def __init__(self, name, level):
        self.name = name
        self.level = level
        self.spells = ['fireball', 'lightning bolt']

    def cast_spell(self, spell):
        if spell in self.spells:
            print(f"{self.name} casts {spell}!")
        else:
            print(f"{self.name} doesn't know the {spell} spell.")

gandalf = Wizard('Gandalf', 100)

print("Behold, the wizard's true form:", gandalf.__class__)
print("Is Gandalf truly a wizard?", isinstance(gandalf, Wizard))
print("Let us divine the wizard's secrets:", dir(gandalf))
```

```text {*}{lines:false}
Behold, the wizard's true form: <class '__main__.Wizard'>
Is Gandalf truly a wizard? True
Let us divine the wizard's secrets: ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge
__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__'
, '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_
_weakref__', 'cast_spell', 'level', 'name', 'spells']
```
````

---
layout: section
---

# Metaclass

---

# Metaclass

<v-clicks>

* class of a class in Python
* controls how classes behave

</v-clicks>

<v-after>

<br>

```text {*}{lines:false}
+-------------------+
|    Metaclass      |    # Defines how classes are created
+-------------------+
         |
         V
+-------------------+
|      Class        |    # Defines the structure and behavior of objects
+-------------------+
         |
         V
+-------------------+
|     Instance      |    # Actual object created using the class
+-------------------+
```

</v-after>

---

# Metaclass

Everything in Python is an object

<v-clicks>

* object
* class
* function
* int
* str
* ...

</v-clicks>

---

# Metaclass

`type`

<v-clicks>

* built-in function in python that returns the class of an object

</v-clicks>

<v-click>

````md magic-move
```python
type("Hello, World!")
```

```python
type("Hello, World!") # Output: <class 'str'>
```

```python
type(42069)
```

```python
type(42069) # Output: <class 'int'>
```

```python
type(int)
```

```python
type(int) # Output: <class 'type'>
```

```python
class Wand:
  ...

wand = Wand()
type(wand)
```

```python
class Wand:
  ...

wand = Wand()
type(wand)  # Output: <class '__main__.Wand'>
```

```python
class Wand:
  ...

Wand.__class__
```

```python
class Wand:
  ...

Wand.__class__  # Output: <class 'type'>
```

```python
type(type)
```

```python
type(type)  # Output: <class 'type'>
```

```python
type(type(type(type)))
```

```python
type(type(type(type)))  # Output: <class 'type'>
```
````

</v-click>

<br><br>

<v-click>

`type` is a special class in Python

</v-click>

<v-clicks>

* class of classes
* handles the behavior of classes

</v-clicks>

<v-click>

<br>

> Python cheats at the implementation level so `type` belongs to itself

</v-click>

---

# Metaclass

Another behavior of `type`

You can create classes dynamically with `type()`

```python
class Wizard:
    skills = ['fireball', 'ice barrier']
```

<v-click>

same as

</v-click>

<v-click>

```python
Wizard = type('Wizard', (), {'skills': ['fireball', 'ice barrier']})
print(Wizard.skills)  # Output: ['fireball', 'ice barrier']
```

</v-click>

---

# Metaclass

<v-clicks depth="2">

* `type` is a metaclass, the base for all other classes
  * `int` is a `type`
  * `int` is an instance of the `type` class
  * `420` is an instance of the `int` type
* `class MyClass: ...` -> `type('MyClass', (object, ), {})`

</v-clicks>

---

# Metaclass

Object Attributes

<span v-click class="text-sm">
Internally calls dunder methods. We can override a class to handle non-existing attributes

<v-click>
<br>
When accessing object properties, `__getattribute__` is called
</v-click>
</span>

<v-click>

````md magic-move
```python {*|8,12|3-4,13|5,14|*}
class Broomstick:
    def __getattribute__(self, name):
        if name == 'model':
            return 'Nimbus'
        return super().__getattribute__(name)

    def __setattr__(self, name, val):
        print(f'setting attribute {name} to {val}')
        super().__setattr__(name, val)

bs = Broomstick()
bs.speed = '20km/h'  # Output: setting attribute speed to 20km/h
print(bs.model)  # Output: Nimbus
print(bs.year) # Output: AttributeError: Broomstick object has no attribute 'year'
```
````

</v-click>

---

# Metaclass

But Python prevents you from doing this

<v-click>

```python
type.foo = 'hello'  # Output: TypeError: cannot set 'foo' attribute of immutable type 'type'
```

</v-click>

<v-click>
or

```python
setattr(type, 'foo', 'hello')  # Output: Same as above
```
</v-click>

<v-click>

<br>

`type` is special

</v-click>

---

# Defining Metaclass

<span></span>

Simple metaclass that raises an error if a class name does not end with `Resource`

<span class="text-sm">
<em>Might</em> be useful for library developers
</span>

````md magic-move
```python
class ResourceInitializer(type):
    def __new__(cls, name, bases, kwds):
        print(
            "In ResourceInitializer.__new__ with params "
            f"{cls=}, {name=}, {bases=}, {kwds=}"
        )
        if not name.endswith("Resource"):
            raise ValueError("Class names must end with Resource")
        return super().__new__(cls, name, bases, kwds)

class BaseResource(metaclass=ResourceInitializer):
    ...
```

```python
class Product(BaseResource):
    def __init__(self, name):
        self.name = name

# Output: ValueError: Class names must end with Resource

```

```python
class ProductResource(BaseResource):
    def __init__(self, name):
        self.name = name

product = ProductResource(name='Butterbeer')
print(product.name)  # Output: Butterbeer
```
````

---

# Metaclass

A dumb example

````md magic-move
```python
class SpongeBobifier(type):
    def __new__(cls, name, bases, dct):
        def to_spongebob_case(s):
            return ''.join(
                c.lower() if i % 2 == 0 else c.upper()
                for i, c in enumerate(s)
            )
        new_dct = {}
        for key, value in dct.items():
            new_key = to_spongebob_case(key)
            new_dct[new_key] = value
        # Create the class using the modified dictionary
        return super().__new__(cls, name, bases, new_dct)
```

```python

class Wizard(metaclass=SpongeBobifier):
    skills = ['frost bite', 'fire ball']

albus = Wizard()
print(f"{hasattr(albus, 'skills')=}")
albus.skills # Output: AttributeError: 'Wizard' object has no attribute 'skills'. Did you mean: 'sKiLlS'?
```
````

---

# Metaclass

ABCMeta

`from abc import ABCMeta`

````md magic-move
```python
class ABCMeta(type):
    def __new__(mcls, name, bases, namespace, /, **kwargs):
        cls = super().__new__(mcls, name, bases, namespace, **kwargs)
        _abc_init(cls)
        return cls

def abstractmethod(funcobj):
    funcobj.__isabstractmethod__ = True
    return funcobj
```

```python
from abc import ABCMeta, abstractmethod

class BasePotion(metaclass=ABCMeta):
    @abstractmethod
    def use(self):
        pass

class HealthPotion(BasePotion):
    def use(self):
        print("Recovered +100 hp")

class InvisibilityPotion(BasePotion):
    ...

hp = HealthPotion()
hp.use()  # Output: Recovered +100 hp

# Output: TypeError: Can't instantiate abstract class InvisibilityPotion
# without an implementation for abstract method 'use'
inv = InvisibilityPotion()
```
````

---
layout: section
---

# What led me here?

---

## What led me here?

<v-click>

I was working in a Django project and found these functions being called in the app:

</v-click>

<v-after>

get_\<field\>_display

````md magic-move
```python
class SomeModel(models.Model):

    STATUS_CHOICES = (
        ("Ready", "r"),
        ("For Review", "ir"),
        ("In Progress", "ip"),
        ("Done", "d"),
    )
    name = models.CharField()
    status = models.CharField(max_length=25, choices=STATUS_CHOICES, default="r")

obj.status = 'r'
context = {
    'status': obj.get_status_display(),  # Output: Ready
}
```
````

</v-after>

---

## What led me here?

I was working in a Django project and found these functions being called in the app:

clean_\<field_name\> in Django

<span class="text-sm">

called via `Model.full_clean()`

</span>

<br>

<br>
<hr>
<br>

validate_\<field_name\> in DRF

<span class="text-sm">

called via `Serializer.validate()`

</span>

---

# Metaclass: `type` in action

````md magic-move
```python
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=255)

Project = type(
    "Project",
    (models.Model,),
    {
        "name": models.CharField(max_length=255),
        "Meta": type(
            "Meta",
            (),
            {"app_label": "test"}
        ),
        "__module__": "database.models"
    }
)
```

```python
class Table(models.Model):
    name = models.CharField(max_length=255)

class Field(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=32)

table = Table.objects.get(pk=1)
fields = Fields.objects.filter(table=table)
attrs = {
    "Meta": type(
        "Meta",
        (),
        {"app_label": "test"}
    ),
    "__module__": "database.models"
}
```

```python
for field in fields:
    attrs[field.name] = models.CharField(max_length=255)

GeneratedModel = type(
    f"Table{table.id}",
    (models.Model,),
    attrs
)

# Assuming the PostgreSQL table has already been created using the schema editor.
GeneratedModel.objects.all()

# Source: https://baserow.io/blog/how-baserow-lets-users-generate-django-models
```

```python {*}{startLine:1}
class AutoHistoryModelSerializerMixin:
    """
    Mixin that automatically generates a serializer class
    with all the model's fields
    """
    model = None
    filterset_fields = ["object_id", "history_user"]

    def get_serializer_class(self):
      ....
```

```python {*}{lines:true,startLine:5}
def get_serializer_class(self):
    if self.model is None:
        raise ValueError(_("Must supply model when using this mixin"))

    serializer_props = {
      "Meta": type("Meta", (), {
        "model": self.model,
        "fields": "__all__"
      }),
      "prev_record": ResourceRelatedField(
          model=self.model,
          many=False,
          read_only=True,
      ),
    }
    serializer_class = type(
        self.model.__name__,
        (QueryFieldsMixin, ModelSerializer,),
        serializer_props,
    )
    return serializer_class
```

```python
class TagHistoryViewSet(
    AutoHistoryModelSerializerMixin,
    ReadOnlyModelViewSet,
):
    model = Tag.history.model
    queryset = model.objects.all()
```
````

---
layout: section
---

# Descriptors

---

# Descriptors

<v-clicks>

* provide a way to customize access to class attributes
* manage attribute behavior in a consistent and reusable way.

</v-clicks>

---

# Descriptors: Demo

````md magic-move
```python
class TinyInteger:
    def __set__(self, instance, value):
        if value > 255:
            raise ValueError("Tiny integers must be less than 255.")
        instance.__tiny_int = value

    def __get__(self, instance, objtype):
        print('__get__ called')
        return instance.__tiny_int

class Wizard:
    level = TinyInteger()

gandalf = Wizard()
gandalf.level = 10 # Okay
print(gandalf.level)  # Output: 10
gandalf.level = 256 # Output: ValueError: Tiny integers must be less than 255.
```
````

---

# Descriptors: Demo

<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  <p class="font-bold">Code too long! </p>
  <p class="text-sm">See <a href="https://github.com/yujinyuz/mubo/tree/demo/demo.py" target="_blank">demo.py</a></p>
</div>

---

# Takeaways

<v-clicks>

* Don't use `exec()` and `eval()` unless you know what you're doing
* Decorators are useful especially for logging, timing, memoization, security
  (e.g. `@login_required`) in Django
* `dir()` is useful especially for debugging
* Use descriptors for a more fine-grained control over attribute access
* You won't need metaclasses 99% of the time
* Hurts searchability (for newbies) because it generates code on the fly
* Fun experience exploring library code

</v-clicks>

---

## Challenge

<v-click>

Rewrite the `paymongo` python SDK! (or any SDK)

</v-click>

<v-clicks>

1. Rewrite at least one endpoint
2. Generate endpoints using class names <span class="text-sm">(Hint: Use Introspection)</span>
3. Implement decorators for timing for how long each endpoints take
4. Use metaclasses to enforce a consistent interface design

</v-clicks>

---

## Challenge

````md magic-move
```python {1-8|11}
payload = {
    'default_device': 'phone',
    'email': 'test@paymongo.com',
    'first_name': 'Pay',
    'last_name': 'Mongo',
    'phone': '+624123456789'
}
paymongo.Customer.create(payload)

# We can just do this without the SDK
r = requests.post('http://api.paymongo.com/customer', json=payload)
```

```python
try:
    cust = paymongo.Customer.create(
        default_device=Customer.DEVICES.PHONE,
        email='hello@email.com',
        first_name='Pay',
        last_name='Mongo',
        phone = '+624123456789'
    )
except paymongo.exceptions.PaymongoException as exc:
      print(exc.code, exc.detail exc.source)

>>> cust.default_device
<Customer.DEVICES.PHONE>

>>> cust.first_name
'Pay'
```
````

<br><br><br>

> Disclaimer: I'm not affiliated with PayMongo
> I just don't like the current interface for their Python SDK

---
layout: end
class: text-center
---

# Thank you!

## Let's Connect

<div class="flex items-center space-x-4">
  <!-- GitHub -->
  <a href="https://github.com/yujinyuz" target="_blank" class="flex items-center space-x-2 text-gray-700 hover:text-black">
    <i class="i-grommet-icons-github"></i>
    <span>yujinyuz</span>
  </a>

  <!-- LinkedIn -->
  <a href="https://linkedin.com/in/yujinyuz" target="_blank" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
    <i class="i-grommet-icons-linkedin text-xl"></i>
    <span>yujinyuz</span>
  </a>

  <!-- Website -->
  <a href="https://jinyuz.dev" target="_blank" class="flex items-center space-x-2 text-gray-700 hover:text-green-500">
    <i class="i-grommet-icons-link text-xl"></i>
    <span>jinyuz.dev</span>
  </a>

</div>

<div class="absolute bottom-10 right-10">

![](/qr.png)

</div>

<style>
a {
  color: #f8f8f8;
}
</style>
