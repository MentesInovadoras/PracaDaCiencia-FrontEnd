import type { Props } from "@/shared/components/nav_bar/shared/NavItem";
import ArticleIcon from '@mui/icons-material/Article';


const gestaoNavItems: Props[] = [
    {
      label: "Diário",
      to: "/gestao",
    },
    {
      label: "Daily",
      to: "/gestao/daily",
    },
    {
      label: "Weekly",
      to: "/gestao/weekly",
    },
    {
        label: "Gestão Interna",
        children: [
            {
                label: "Roteiros",
                icon: ArticleIcon,
                to: '/gestao/gestao_interna/roteiros/listar',
                textColor: 'text.primary',
                linkColor: 'info',
            }
        ]
    }
  ]



export default gestaoNavItems;

