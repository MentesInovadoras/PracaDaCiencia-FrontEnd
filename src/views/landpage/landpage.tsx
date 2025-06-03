import LayoutMobile from './layouts/layout_mobile';
import LayoutDesktop from './layouts/layout_desktop';

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