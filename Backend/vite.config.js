{
  "version":2,
    "builds":[
    {"src":"*.js",".jsx","use":"@vercel/node"}
  ],
    "routes":[
    {
      "src":"/(.*)",
      "dest":"/"
    }
  ]
}
