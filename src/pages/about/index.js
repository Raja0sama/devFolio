import React, { useEffect } from "react"
import { useGlobal } from "../../utils/context"
import "./../../styles/global.css"
const About = () => {
  const [_, setPageData] = useGlobal()
  useEffect(() => {
    setPageData({ title: "2- ABOUT" })
  }, [])
  return (
    <div
      className="d-flex flex-column align-items-center disable-scrollbars"
      style={{ height: "100%", marginTop: "50px", overflow: "auto" }}
    >
      <h1 style={{ fontSize: "calc(4vh + 2vw)" }}>RAJA OSAMA</h1>
      <p style={{ fontSize: "22px", textAlign: "center", opacity: "0.67" }}>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem
        et tortor. Molestie a iaculis at erat pellentesque adipiscing. Vel elit
        scelerisque mauris pellentesque. Vestibulum morbi blandit cursus risus
        at ultrices. Porttitor rhoncus dolor purus non enim praesent elementum.
        Amet consectetur adipiscing elit ut aliquam purus. Luctus venenatis
        lectus magna fringilla urna porttitor rhoncus. Vitae elementum curabitur
        vitae nunc sed velit dignissim sodales. Habitant morbi tristique
        senectus et netus et. Massa tincidunt dui ut ornare lectus.Proin
        fermentum leo vel orci porta non pulvinar neque laoreet. Augue ut lectus
        arcu bibendum at varius. Potenti nullam ac tortor vitae. Ornare quam
        viverra orci sagittis eu volutpat odio facilisis. Massa tincidunt nunc
        pulvinar sapien et ligula ullamcorper malesuada proin. Elit at imperdiet
        dui accumsan sit amet nulla facilisi. Proin libero nunc consequat
        interdum. Condimentum id venenatis a condimentum vitae sapien
        pellentesque. Netus et malesuada fames ac. Mi sit amet mauris commodo
        quis imperdiet massa tincidunt. A lacus vestibulum sed arcu non odio
        euismod. Faucibus turpis in eu mi bibendum neque egestas congue quisque.
        Mauris ultrices eros in cursus turpis.Tortor posuere ac ut consequat
        semper. At ultrices mi tempus imperdiet nulla malesuada pellentesque.
        Amet risus nullam eget felis eget nunc lobortis mattis. Tortor posuere
        ac ut consequat semper viverra nam. Posuere morbi leo urna molestie.
        Enim facilisis gravida neque convallis. Leo in vitae turpis massa. Ac
        felis donec et odio. Eget nunc scelerisque viverra mauris in aliquam.
        Amet risus nullam eget felis eget. Est sit amet facilisis magna etiam
        tempor. Odio morbi quis commodo odio aenean sed adipiscing diam. Quis
        viverra nibh cras pulvinar mattis. Hendrerit dolor magna eget est lorem
        ipsum dolor sit. Odio facilisis mauris sit amet massa vitae tortor
        condimentum lacinia.Rutrum quisque non tellus orci ac auctor augue
        mauris augue. Purus in mollis nunc sed id semper risus in hendrerit.
        Vitae proin sagittis nisl rhoncus mattis. Et egestas quis ipsum
        suspendisse ultrices gravida. Orci dapibus ultrices in iaculis. Velit
        euismod in pellentesque massa placerat duis ultricies. Sapien eget mi
        proin sed. Sodales neque sodales ut etiam sit amet nisl. Sed velit
        dignissim sodales ut eu sem. Tellus mauris a diam maecenas sed enim ut.
        In ante metus dictum at tempor commodo ullamcorper a lacus. Sapien eget
        mi proin sed libero enim sed. Arcu bibendum at varius vel pharetra vel.
        Mollis nunc sed id semper.Eget sit amet tellus cras. Tortor pretium
        viverra suspendisse potenti nullam. Nulla malesuada pellentesque elit
        eget gravida cum sociis natoque penatibus. Blandit volutpat maecenas
        volutpat blandit aliquam etiam erat velit scelerisque. Ipsum a arcu
        cursus vitae. At volutpat diam ut venenatis tellus in metus vulputate.
        Pharetra pharetra massa massa ultricies mi quis. Lorem dolor sed viverra
        ipsum nunc aliquet bibendum enim. Condimentum mattis pellentesque id
        nibh tortor. Massa sapien faucibus et molestie. Parturient montes
        nascetur ridiculus mus mauris vitae. Sit amet mauris commodo quis
        imperdiet massa tincidunt. Enim blandit volutpat maecenas volutpat
        blandit aliquam etiam erat velit. Elit scelerisque mauris pellentesque
        pulvinar pellentesque habitant morbi. Id venenatis a condimentum vitae
        sapien. Enim nunc faucibus a pellentesque. Maecenas pharetra convallis
        posuere morbi leo urna molestie.
        <br />
        <br />
      </p>
    </div>
  )
}

export default About
