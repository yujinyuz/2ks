---
# You can also start simply with 'default'
theme: default
title: Leveraging Python .pex files
drawings:
  persist: false
transition: slide-left
mdc: true
lineNumbers: true
layout: intro
routerMode: hash
favicon: https://jinyuz.dev/favicon.ico
---

# Managing pex-pectations

Leveraging Python .pex files
<div class="absolute bottom-10">
  <span class="font-700">
    @yujinyuz
  </span>
</div>

---
layout: section
---

# <span class="text-green500">></span>whoami<span class="blink text-green500">_</span>


---
layout: default
---

# <span class="text-green500">></span>whoami<span class="blink text-green500">_</span>

<v-clicks depth="2">

- Eugene Oliveros
- Software Engineer @ Process Shepherd
- Enthusiast of open-source and micro-optimizations
  <!-- - Mouseless -->
  <!-- - QWERTY -> Colemak -->
  - `len('Yujin') == 5 or len('Yuj') == 3`
- Purrdad 🐈 🐈 🐈

</v-clicks>

<style>
ul {
  list-style: disc;
}
</style>

---
layout: section
---

# What the hell are .pex files?

---
transition: slide-left
---

# PEX files

<v-clicks>

* self-contained executable Python virtual environments.
* a single file that can run python applications <!-- think of it as a single binary the result of go build  -->

</v-clicks>


---
layout: section
transition: slide-up
---

# \_\_main\_\_

---
transition: slide-up
---

# \_\_main\_\_ demystified

<v-click>
</v-click>

````md magic-move {lines: false}
```bash
$ python .
```

```bash
$ python .
/opt/bin/python3: can't find '__main__' module in '/home/user/demo'
```

```bash
$ echo "print('Welcome to PyConf Mini!')" > __main__.py
```

```bash
$ echo "print('Welcome to PyConf Mini!')" > __main__.py
$ python .
```

```bash
$ echo "print('Welcome to PyConf Mini!')" > __main__.py
$ python .
Welcome to PyConf Mini!
```

```bash
$ echo "print('Welcome to PyConf Mini!')" > __main__.py
$ python .
Welcome to PyConf Mini!
$ python subdir/
```

```bash
$ echo "print('Welcome to PyConf Mini!')" > __main__.py
$ python .
Welcome to PyConf Mini!
$ python subdir/
/opt/bin/python3: can't find '__main__' module in '/home/user/demo/subdir'
```

````
<!-- Python is trying looking for a __main__.py when running it inside a directory -->

<v-click>

**\_\_main\_\_.py** is a special file that serves as the **entry point** for a package


```bash {lines: false}
$ python -m http.server 8080 # Looks for a __main__.py file in that package
```

<!-- python -m allows you to run Python modules directly from the command line. -->

<!-- That's why you might often see `if __name__ == '__main__': ...` in tutorials -->

<!-- Doing so allows allows python to execute the code if it's being run as a script. If you
don't do this, nothing will happen, except that if you try importing something from that package, it
will run the whole file!

-->


</v-click>


---
transition: slide-up
---

# PEX files

<v-clicks>

* self-contained executable Python virtual environments.
* carefully constructed zip files with a `#!/usr/bin/env python` and special \_\_main\_\_.py that
  allows you to interact with the PEX runtime

</v-clicks>


<!-- pex runtime is just the fancy word for virtual environment where you are able to interact
within what's inside of that pex runtime

-->

<br>

<v-click>

````md magic-move {lines: false}
```bash
$ unzip -l demo.zip
```

```bash
$ unzip -l demo.zip
Archive:  demo.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
       90  09-26-2024 14:00   __main__.py
       50  09-26-2024 14:00   my_script.py
---------                     -------
      140                     2 files
```
```bash
$ unzip -l demo.zip
Archive:  demo.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
       90  09-26-2024 14:00   __main__.py
       50  09-26-2024 14:00   my_script.py
---------                     -------
      140                     2 files

$ python demo.zip
```

```bash
$ unzip -l demo.zip
Archive:  demo.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
       90  09-26-2024 14:00   __main__.py
       50  09-26-2024 14:00   my_script.py
---------                     -------
      140                     2 files

$ python demo.zip
Hello from my_script.py
```
````
</v-click>


---
layout: default
---

# PEX runtime

* Just a simple python interpreter where it may or may not contain python packages


## Create a .pex file

```bash { lines: false }
$ pipx install pex
$ pex requests -o demo.pex  # adds the python requests library to the pex
$ chmod +x demo.pex
$ ./demo.pex # brings you to pex repl similar to python repl
```


---
layout: default
---

# PEX environment

<div class="flex justify-center">
  <SlidevVideo v-click autoplay controls width="85%">
    <source src="/pex-demo-requests.mp4" type="video/mp4" />
  </SlidevVideo>
</div>


---
layout: default
---

# Run python scripts with .pex files

<!-- we created a .pex file earlier called demo.pex that contains the requests package -->

<div class="flex justify-center">
  <SlidevVideo v-click autoplay controls width="85%">
    <source src="/run-python-scripts-with-pex.mp4" type="video/mp4" />
  </SlidevVideo>
</div>


---
layout: default
---

# Include a python interpreter within .pex
<br>

<v-click>

Pass `--scie eager` or `--scie lazy`

`--lazy` if you have internet access, it will automatically download a python distribution if one
does not exists

</v-click>



---
layout: default
---

# Include a python interpreter within .pex

````md magic-move { lines: false }
```bash
$ pex requests -o demo --scie eager # or --scie lazy
```

```bash
$ pex requests -o demo --scie eager # or --scie lazy
$ ls -lh
total 35992
-rw-r--r--@ 1 user  staff    90B Sep 26 14:20 __main__.py
-rwxr-xr-x@ 1 user  staff    18M Sep 26 14:20 demo
-rw-r--r--@ 1 user  staff    50B Sep 26 14:20 my_script.py
```
````

<Arrow v-click="[3,5]" x1="100" y1="160" x2="270" y2="185" color="red" />

<br v-click>

<v-click>
Contains larger size compared to the .pex file because of the bundled python interpreter
</v-click>


<div v-click class="text-sm bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-1 my-20" role="info">
  <p class="font-bold">Important</p>
  <p>Be aware that a .pex file built on macOS may or may not run on Linux, and vice versa.</p>
</div>


---
layout: default
---

# Build from docker and deploy

<!-- mubo -->

Full source code here: https://github.com/yujinyuz/mubo/tree/pexample

```dockerfile
# Build stage
FROM python:3.11-slim AS builder
...
RUN hatch build
RUN pex dist/*.whl -o mubo.pex -c mubo

# Final stage
FROM python:3.11-slim
WORKDIR /usr/src/app
# Copy the built artifact from the builder stage
COPY --from=builder /usr/src/app/mubo.pex .
# Set execute permissions
RUN chmod +x mubo.pex
...
# Expose the port the app runs on
EXPOSE 8000

# Run the application via custom management command
CMD ["./mubo.pex", "rungunicorn"]
```

---
layout: default
---

# Build from docker and deploy

<img src="/docker.png" />

<Arrow v-click x1="500" y1="150" x2="720" y2="180" color="red" />


---
layout: default
---

# Build from docker and deploy


<div class="flex justify-center">
  <SlidevVideo v-click autoplay controls width="85%">
    <source src="/django-as-pex.mp4" type="video/mp4" />
  </SlidevVideo>
</div>


---
layout: default
---

# Real world encounters

<!-- haven't encountered much of .pex after my first job -->

<v-click>

* ka-lite & kolibri <!-- Khan Academy Lite, Kolibri successor of KA-Lite -->
* Apache Spark / PySpark

</v-click>

---
layout: default
---

# Real world encounters

kolibri: https://github.com/learningequality/kolibri/releases

<img src="/kolibri-pex.png" />


---
layout: default
---

# Real world encounters

kolibri: https://github.com/learningequality/kolibri/releases


<div class="flex justify-center">
  <SlidevVideo v-click autoplay controls width="80%">
    <source src="/kolibri-pex-quick-demo.mp4" type="video/mp4" />
  </SlidevVideo>
</div>

---
layout: default
---



# Real world encounters

Apache Spark / PySpark

<img src="/apache-spark.png" class="w-100 h-fit" />

---
layout: default
---

# Takeaways

* Bundle dependencies and application logic into a single file for easy distribution <!-- python is to pex, java is to jar -->
* Eliminates the need for `pip install ...` in the host. Simply `scp /path/to/pex /path/to/server`
* Useful for distributing/deploying applications especially via sneakernet
* Saves bandwidth <!-- by putting it in a storage like s3 and just download it -->

---
layout: end
class: text-center
---

# Thank you!

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

![]()

</div>

<style>
a {
  color: #f8f8f8;
}
</style>
