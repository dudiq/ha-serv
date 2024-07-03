import {Card} from "./ui/card.tsx";
import {Row} from "./ui/row.tsx";

export function Dash() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col gap-6 flex">
          <Row>
            <Card
              href="http://jellyfin.home.local"
              title="🎦 кино"
            />
            <Card
              href="http://qbittorrent.home.local"
              title="Торренты"
              icon="Torrent"
            />
            <Card
              href="http://ytdl.home.local"
              title="Youtube качалка"
              icon="Youtube"
            />
          </Row>
          <Row>
            <Card
              href="http://home.local:8123"
              title="🏠 home assistant"
            />
            <Card
                href="http://home.local:1984/admin"
                title="📷 go2rtc"
              />
            </Row>
            <Card
              href="http://share.home.local"
              title="Share files"          
            />
          <Row>
            <Card
              href="http://portainer.home.local"
              title="🐋 portrainer"
            />
            <Card
              href="http://home.local:8080"
              title="🔗 traefic"
            />
            <Card
              href="http://glances.home.local"
              title="📝 monitor"
            />
          </Row>
        </div>
      </div>
    </>
  )
}
