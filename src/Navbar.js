const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>The Parking Solution</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="https://www.google.com/maps/place/290+CCM+Blvd,+Cincinnati,+OH+45219/@39.1301676,-84.5186872,17.58z/data=!4m6!3m5!1s0x8841b38b5177287d:0x9b42194bc19f3638!8m2!3d39.1299743!4d-84.5178668!16s%2Fg%2F11gdqpbv3k?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Map</a>
                <a href="https://ccmonstage.universitytickets.com/w/CustomPageView.aspx?pageID=9" target="_blank" rel="noreferrer" >Students</a>

            </div>
        </nav>
    );
}
 
export default Navbar;