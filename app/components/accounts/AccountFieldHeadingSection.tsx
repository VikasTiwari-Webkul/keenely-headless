import Typography from "@keenly/components/elements/Typography";

export interface IAccountFieldHeadingSectionProps {
  title: string;
  subTitle: string;
}

const AccountFieldHeadingSection = ({ title,subTitle}:IAccountFieldHeadingSectionProps) => {
  return (
    <div className="w-full py-3">
      <div className="w-full flex flex-col gap-y-1">
        <Typography variant="p2-mob" className="font-normal text-gray-800">{title}</Typography>
        <Typography variant="h4-mob" className="font-semibold">{subTitle}</Typography>
      </div>
    </div>
  )
}

export default AccountFieldHeadingSection