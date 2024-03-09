import {Icon, IconName} from "./icons/icon.tsx";

type Props = {
  href:string
  title: string
  icon?: IconName
}
export function Card({title, icon, href}: Props) {
  return (
    <>
      <a href={href} className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex gap-2 items-center justify-center">
          {icon && <Icon name={icon}/>}
          {title}
        </h5>
      </a>
    </>
  )
}
