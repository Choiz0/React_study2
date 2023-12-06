import MenuItem from './MenuItem'
const Menu = ({menus})=>{
    console.log(menus)
    return (
        <div className="section-center">
            {menus.map((it)=>{
                return <MenuItem {...it} />
            })}
        </div>
    )
}
export default Menu;