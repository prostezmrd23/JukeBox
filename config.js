

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["329486929110499329", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Jirayu",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port:  13592,
      secure: false
    }
  ]
}
