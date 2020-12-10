import { MessageEmbed } from "discord.js";

const ADD_EXAMPLE = `
\`\`\`md
!add person phil-humanson \`​\`​\`md
# Phil Humanson

Phil is a real person with thoughts and feelings.

## Phil's Things

- loving family
- rewarding job
- third thing
\`​\`​\`
\`\`\`
`;

export const HELP_MESSAGE = {
  embed: new MessageEmbed()
    .setColor("DARK_ORANGE")
    // .setAuthor("Lore WikiBot")
    .setTitle("Lore WikiBot Commands")
    .setDescription(
      `\
      Most commands are based on general questions like *who* or *what*. \
      A command with no arguments, \`!<question>\`, will list the relevant pages. \
      A command with a name argument, \`!<question> <name>\`, will pull up the specific page with that name. \
      It will also try to match parts of names, so this: \
      \`\`\`!who adabr\`\`\`will match the entry for *Adabra Gwynn*. \
      The first match found will be shown.\
      `
    )
    .addFields(
      { name: "\u200B", value: "\u200B" },
      { name: "!who", value: "People and creatures", inline: true },
      { name: "!what", value: "Things and lore", inline: true },
      { name: "!where", value: "Locations in the world", inline: true },
      { name: "!when", value: "Session notes", inline: true },
      { name: "!why", value: "Rules and materials", inline: true },
      { name: "!how", value: "Show this help doc", inline: true },
      // { name: '\u200B', value: '\u200B' },
      {
        name: "!more",
        value: "Show more contents of a truncated file",
        inline: true,
      },
      {
        name: "!recap",
        value: "Notes from the most recent session",
        inline: true,
      },
      { name: "\u200B", value: "\u200B" }
    )
    .addField(
      "!add",
      `Create a new document of type \`person\`, \`place\`, \`thing\`, \
      \`session\`, or \`meta\`. Follows the syntax \`!add <type> <name> <content>\`.\
      Content can be any text, including markdown blocks:\
      ${ADD_EXAMPLE}`
    ),
};

export const TEST_PERSON = `\
# Adabra Gwynn

Potion maker and keeper of the stone mill at **Umbridge Hill**, a few hours south of **Phandalin**. We were sent to \
`;

export const TEST_MARKDOWN = `\
# 2020.12.6

## Trouble of Leadership

We wake and eat breakfast. **Halia Thornton**, of the mining guild, is grateful for us saving **Adabra**. Honor asks about how to find out about his own lineage. She suggests **Neverwinter**. She congratulates us on our victory over the manticore. She tells us **Gnomengarde** is past **Umbridge Hill**, to the southeast, nestled between two mountains. She thinks she could do the job better than **Harbin**. Chet receives a secret message from her in thieves' cant, offering 150 gp for the Gnomish weapon if we give it to her instead of Harbin.

We decide to first warn the dwarves before continuing to **Gnomengarde**. Honor picks up a bedroll. **Elmar Barthen** doesn't have much nice to say about **Harbin** either. He manages money well, but can't be trusted to defend the town. Thinks that the kid in the shop, **Thistle Bottle**, would pick up a sword first.

## Excavation Site

We take the road west toward the dwarven excavation site. A the end of a deep canyon is a large, decayed black stone gate. We see a ruined settlement ahead. Grenache recognizes the stonework as that of the **Durogar**, some bad dwarf mofos who were obsessed with treasure. Inside the settlement is an entrance cut into the mountain, flanked by 10-foot cloaked dwarf statue.

We bring the warning about the dragon, but it turns out these dwarves have a problem of their own. **Norbis** and **Dazzlin** encountered some kind of...jelly inside. They will give us 2 sending stones to deal with it. Grenache recognizes one of the statues as **Abathar**, the dwarven god of greed. This is a temple to him.

Inside the temple is a hallway leading to a large chamber with 4 columns. There is a secret door to the right. Down the secret passage are dead-end walls marked with dwarven faces. I inspect the northern wall, and find that the dwarf's eyes are buttons. Pushing them opens the wall into the main chamber. Two emeralds fall from the ceiling.

The vaulted ceiling is over 30 feet high here. At the center of the chamber is a dais. The jelly oozes out of a crack in the column. It turns out that slashing damage can split them and cause them to multiply. During the fight, Ekemon and Roman are knocked unconscious by acid jelly punches. Roman gets dick punched and cured by Honor. They defeat the slimes.

We explore hidden secret chambers and Chet gets his hands blown up by trying to steal a giant ruby from a statue of **Abathar**. We decide to get our reward and leave, and run into a band of Orcs on the way out.\
            `;
