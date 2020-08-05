const projects = [
  {
    name: "myPortfolio", 
    description: "This website was built as my personal portfolio using ReactJS, HTML, and CSS.",
    icon: "fa-briefcase",
    tags: ["javascript", "react", "html", "css"],
    link: "https://github.com/Rob-Reutiman/portfolio"
  },
    { 
    name: "myCompiler", 
    description: "A compiler for a C-style language consisting of a scanner, a parser, a type-checker, and an assembly code generator.",
    icon: "fa-laptop-code",
    tags: ["c", "flex", "bison", "x86"],
    link: "https://github.com/Rob-Reutiman/my_compiler"
  },
  { 
    name: "pub/sub", 
    description: "A basic chat application that using POSIX threads and network sockets via a RESTful API.",
    icon: "fa-comments",
    tags: ["c", "threads", "sockets", "concurrency"],
    link: "https://github.com/Rob-Reutiman/pub_sub"
  },
  { 
    name: "heapManager", 
    description: "A library that interacts with the OS to perform heap management on behalf of a user process.",
    icon: "fa-layer-group",
    tags: ["c", "heap", "free-list"],
    link: "https://github.com/Rob-Reutiman/heap_manager"
  },
  { 
    name: "simpleFS", 
    description: "A simplified version of the Unix File System. Made up of three main components: a shell, file system, and disk emulator",
    icon: "fa-folder-open",
    tags: ["c", "filesystem", "disk-image"],
    link: "https://github.com/Rob-Reutiman/simple_FS"
  }
]

export default projects;