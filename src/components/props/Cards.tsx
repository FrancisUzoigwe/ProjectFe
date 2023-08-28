interface iProps {
  image?: any;
  imagecol?: string;
  boxbg?: string;
  bg?: string;
  mainbg?: string;
  bigText?: string;
  smallText?: string;
}
const Cards: React.FC<iProps> = ({ image, bg, boxbg, imagecol , mainbg, bigText, smallText}) => {
  return (
    <div className="w-[350px] h-[250px] rounded-[10px] bg-white flex flex-col shadow-2xl ml-[20px] cursor-pointer hover:shadow-xl">
      <div
        className={`w-full h-[60px] ${mainbg} rounded-tl-[10px] rounded-tr-[10px] ${bg} `}
      >
        <div
          className={`w-[60px] bg-white h-[60px] rounded-xl flex items-center justify-center ${boxbg} ml-[30px] mt-[30px]`}
        >
          <div className={`w-[30px] h-[30px] rounded-xl ${imagecol} `}>
            {image}
          </div>
        </div>
          <div className="w-full h-[50px] flex flex-col items-center">
            <div className="w-[90%] h-[35px]">
              <div className="flex items-center font-semibold text-[20px]">{bigText}</div>
              <div className="mt-[5px]">
               {/* { Keep tasks in order, deadlines on track, and team members aligned with Trello.} */}
               {smallText}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;
