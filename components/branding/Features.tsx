/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import {
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordEmbedFooter,
  DiscordMention,
  DiscordMessage,
  DiscordMessages
} from "@skyra/discord-components-react";

const profiles = {
  evie: {
    author: "Evie✨",
    avatar: "/assets/avatars/evie.png"
  },
  tristan: {
    author: "tristan",
    avatar: "/assets/avatars/tristan.gif"
  },
  monbrey: {
    author: "Monbrey",
    avatar: "/assets/avatars/monbrey.png"
  }
};

export default [
  {
    name: "Moderation",
    description: [
      "Evie features a very powerful moderation engine, allowing you to ban, kick, temp role, timeout, and more."
    ].join(" "),
    preview: (
      <DiscordMessages>
        <DiscordMessage
          author={profiles.evie.author}
          avatar={profiles.evie.avatar}
          bot={true}
          verified={true}
          roleColor="#e36956"
        >
          <DiscordCommand
            slot="reply"
            avatar={profiles.monbrey.avatar}
            author={profiles.monbrey.author}
            command="/ban"
          ></DiscordCommand>
          <DiscordEmbed slot="embeds" color="#00ff00">
            <DiscordEmbedDescription slot="description">
              <img
                style={{
                  width: "18px",
                  height: "18px",
                  textIndent: "-9999px",
                  verticalAlign: "bottom",
                  objectFit: "contain",
                  display: "inline-block"
                }}
                alt=""
                src="https://cdn.discordapp.com/emojis/952340083418230874.gif?size=44&quality=lossless"
              />{" "}
              Banned <DiscordMention>tristan</DiscordMention>{" "}
              (97470053615673344) indefinitely for <code>not clutching up</code>
              .
            </DiscordEmbedDescription>
          </DiscordEmbed>
        </DiscordMessage>
        <DiscordMessage
          author={profiles.evie.author}
          avatar={profiles.evie.avatar}
          bot={true}
          verified={true}
          roleColor="#e36956"
        >
          <DiscordEmbed
            slot="embeds"
            color="#eb564b"
            authorName="Monbrey#4502 (122157285790187530)"
          >
            <DiscordEmbedDescription slot="description">
              <strong>Member</strong>: <code>tristan#0005</code>{" "}
              (97470053615673344)
              <br />
              <strong>Action</strong>: Ban
              <br />
              <strong>Reason</strong>: not clutching up
            </DiscordEmbedDescription>
            <DiscordEmbedFooter
              slot="footer"
              footerImage="/assets/avatars/evie.png"
              timestamp={new Date()}
            >
              Evie | punishment
            </DiscordEmbedFooter>
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    )
  },
  {
    name: "Utility",
    description: [
      "Evie comes with heaps of helpful utilities to construct your server, lookup information, and more."
    ].join(" "),
    preview: (
      <DiscordMessages>
        <DiscordMessage
          author={profiles.evie.author}
          avatar={profiles.evie.avatar}
          bot={true}
          verified={true}
          roleColor="#e36956"
        >
          <DiscordCommand
            slot="reply"
            avatar={profiles.tristan.avatar}
            author={profiles.tristan.author}
            command="/importmessage"
          ></DiscordCommand>
          <DiscordEmbed slot="embeds" color="#00ff00">
            <DiscordEmbedDescription slot="description">
              <img
                alt=""
                style={{
                  width: "18px",
                  height: "18px",
                  textIndent: "-9999px",
                  verticalAlign: "bottom",
                  objectFit: "contain",
                  display: "inline-block"
                }}
                src="https://cdn.discordapp.com/emojis/952340083418230874.gif?size=44&quality=lossless"
              />{" "}
              Imported <a>here</a>.
            </DiscordEmbedDescription>
          </DiscordEmbed>
        </DiscordMessage>
        <DiscordMessage
          author={profiles.evie.author}
          avatar={profiles.evie.avatar}
          bot={true}
          verified={true}
          roleColor="#e36956"
        >
          <DiscordEmbed slot="embeds" color="#eb564b">
            <DiscordEmbedDescription slot="description">
              Please follow these server rules!
            </DiscordEmbedDescription>
            <DiscordEmbedFields slot="fields">
              <DiscordEmbedField fieldTitle="Respectfulness">
                This is a friendly server, please only utilize profanity to a
                minimum. Remember to be respectful towards everyone and do not
                cause, create or bring controversy to this server.
              </DiscordEmbedField>
              <DiscordEmbedField fieldTitle="Server language">
                This is an English server, please do not speak in any other
                languages as this can make it hard for the staff to moderate and
                hard for other members to understand what you are trying to say.
              </DiscordEmbedField>
              <DiscordEmbedField fieldTitle="Discord ToS & Guidelines">
                We strictly follow Discord Community Guidelines, any violation
                against Discord&apos;s ToS & guidelines will result in a ban.
              </DiscordEmbedField>
              <DiscordEmbedField fieldTitle="No spamming">
                No spamming, advertising, or NSFW content. Don&apos;t be a jerk
                or generally obnoxious, nobody likes a troller.
              </DiscordEmbedField>
              <DiscordEmbedField fieldTitle="Direct Messages">
                If you are caught direct messaging someone from this server
                breaking these rules you will still be punished.
              </DiscordEmbedField>
            </DiscordEmbedFields>
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    )
  }
];
