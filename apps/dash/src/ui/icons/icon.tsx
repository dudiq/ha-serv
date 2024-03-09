import * as assets from './assets'

export type IconName = keyof typeof assets

type Props = {
  name: IconName
}

export function Icon({name}: Props) {

  const IconComponent = assets[name] || null

  return (
    <div className="w-7 h-7">
      <IconComponent/>
    </div>
  )
}
