import LayoutMobile from './layout_mobile';
import LayoutDesktop from './layout_desktop';


interface LandpageProps
{
    isMobile?: boolean
}

const Landpage: React.FC<LandpageProps> = ({isMobile=false}) => 
{
    return (
        <>
            {isMobile ? <LayoutMobile /> : <LayoutDesktop />}
        </>
    )
}


export default Landpage;