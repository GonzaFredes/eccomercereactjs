import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const prod = [
    {
        "id":1,
        "name":"Remera Vans Classic Blanca",
        "description":"La Remera Vans Classic es un clásico que no puede faltar a la hora de renovar tu ropero. Su logo de Vans en el frente está diseñado para poder combinarlo con cualquier prenda sin perder el estilo, y su corte clásico es ideal para mantenerte cómodo durante todo el día.",
        "precio":"7400",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw058d7af9/products/VA_VN0A4BRWYB2/VA_VN0A4BRWYB2-1.JPG",
        "category":"remeras"
    },
    {
        "id":2,
        "name":"Remera Vans Classic Azul",
        "description":"La Remera Vans Classic es un clásico que no puede faltar a la hora de renovar tu ropero. Su logo de Vans en el frente está diseñado para poder combinarlo con cualquier prenda sin perder el estilo, y su corte clásico es ideal para mantenerte cómodo durante todo el día.",
        "precio":"7490",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw53f66782/products/VA_VN000GGGY8MCASA/VA_VN000GGGY8MCASA-1.JPG",
        "category":"remeras"
    },
    {
        "id":3,
        "name":"Remera Champion Classic Logo",
        "description":"La Remera Champion Classic Logo es esa prenda que completa tu look resaltándolo estés donde estés, sin perder nunca de foco la comodidad. Su confección en algodón es cómoda para usar durante el día o la noche y para usar con tu outfit deportivo o casual. El logo de la marca en el frente, es un detalle que no pasa desapercibido.",
        "precio":"10600",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1b8b2005/products/CH_CHHT5747P106/CH_CHHT5747P106-1.JPG",
        "category":"remeras"
    },
    {
        "id":4,
        "name":"Remera Puma Classics Logo Interest",
        "description":"La Remera Puma Clasics Logo Interest es un clásico que agrega color y diseño a tus looks. El Big Cat sobre el frente de la prenda viste en estilo deportivo tus atuendos urbanos El algodón de confección te da suavidad en todo momento. Usala para un casual day en el trabajo, ir a la universidad o juntarte con amigos. No importa si es con un jogger o un jean, ella siempre queda bien.",
        "precio":"8000",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4a5bcc70/products/PU_534652-52/PU_534652-52-1.JPG",
        "category":"remeras"
    },
    {
        "id":5,
        "name":"Remera Converse Classic Fit",
        "description":"Una remera única para correr, ó porque no para cenar con la persona que te gusta, con los nuevos modelos Converse puedes hacer de todo.",
        "precio":"7400",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0d21f399/products/CO_D1581402/CO_D1581402-1.JPG",
        "category":"remeras"
    },
    {
        "id":6,
        "name":"Remera Converse Cons Embroidered",
        "description":"Adecuada para la noche,adecuada para el día, y para todo momento.",
        "precio":"11900",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw381fdb48/products/CO_D1590891/CO_D1590891-1.JPG",
        "category":"remeras"
    },
    {
        "id":7,
        "name":"Remera Nike Dri-Fit Miler",
        "description":"Mantenete fresco y cómodo con Remera Nike Dri-Fit Miler. Confeccionada con la tecnología Dri-FIT que capilariza el sudor. Cuenta con un panel trasero de malla ofrece ventilación adicional para tus entranamientos.",
        "precio":"11500",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw06c95e12/products/NI_DD6013-405/NI_DD6013-405-1.JPG",
        "category":"remeras",
    },
    {
        "id":8,
        "name":"Remera Converse Classic Fit",
        "description":"La Remera Vans Classic es un clásico que no puede faltar a la hora de renovar tu ropero. Su logo de Vans en el frente está diseñado para poder combinarlo con cualquier prenda sin perder el estilo, y su corte clásico es ideal para mantenerte cómodo durante todo el día.",
        "precio":"7400",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc8cb5446/products/CO_D1581411/CO_D1581411-1.JPG",
        "category":"remeras",
    },
    {
        "id":9,
        "name":"Remera Nike Essentials",
        "description":"",
        "precio":"8500",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw74af3545/products/NI_DM6377-657/NI_DM6377-657-1.JPG",
        "category":"remeras",
    },
    {
        "id":10,
        "name":"Remera Jordan Sport DNA '85 Crew",
        "description":"La Remera Jordan Sport DNA '85 Crew cuenta con un efecto tie-dye integral y una estampa Jordan para mejorar cada uno de tus looks diarios. El ajuste holgado y las mangas con hombros caídos te permiten moverte mejor y más libre. Está elaborada en algodón para brindarte una sensación superior de suavidad mientras realizas todas tus actividades.",
        "precio":"13000",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4c4ddc79/products/NI_DH8982-100/NI_DH8982-100-1.JPG",
        "category":"remeras",
    },
    {
        "id":11,
        "name":"Remera Converse Classic Fit",
        "description":"La Remera Vans Classic es un clásico que no puede faltar a la hora de renovar tu ropero. Su logo de Vans en el frente está diseñado para poder combinarlo con cualquier prenda sin perder el estilo, y su corte clásico es ideal para mantenerte cómodo durante todo el día.",
        "precio":"7400",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3dad8dc7/products/CO_D1581401/CO_D1581401-1.JPG",
        "category":"remeras",
    },
    {
        "id":12,
        "name":"Remera Puma Basic",
        "description":"La Remera Puma Basic es, como su nombre lo indica, un básico que no puede faltar en tu ropero a la hora de armar tus looks diarios. Su diseño liso te permite combinarla con todas tus prendas favoritas y el corte clásico mejora tu movilidad para que encares tu rutina con toda la comodidad que buscabas.",
        "precio":"6000",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw22b64f69/products/PU_907307-01/PU_907307-01-1.JPG",
        "category":"remeras",
    },
    {
        "id":13,
        "name":"Zapatillas Vans U Sk8-Low",
        "description":"Las Zapatillas Vans U Sk8-Low son un clásico de Vans que se siguen adaptando a la rutina de nuestra época. Podes combinarlas con todos tus outfits y lucirlas en cualquier ocasión. La capellada en gamuza y sintético aporta durabilidad y la suela de goma mejor tracción, mostrando un estilo único para que te destaques siempre.",
        "precio":"24700",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1f256639/products/VA_VN0A5KXDBZW1/VA_VN0A5KXDBZW1-1.JPG",
        "category":"calzado"
    },
    {
        "id":14,
        "name":"Zapatillas Vans Sk8-Low",
        "description":"Las Zapatillas Vans Sk8- Low son un clásico moderno imprescindible en cualquier zapatero, porque completan tu look a la perfección aunque lleves joggings o jeans y para cualquier plan. Su lona resistente con puntera reforzada hace frente al desgaste volviendo este par super duradero. Además, su cuello acolchado te ofrece comodidad, sujeción y libertad al movimiento. La suela waffle imprime la distinción de estas zapas. Nunca pueden faltar unas Sk8 en tu vida.",
        "precio":"25200",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0e03f5a2/products/VA_VN0A4UUK6BT1/VA_VN0A4UUK6BT1-1.JPG",
        "category":"calzado"
    },
    {
        "id":15,
        "name":"Zapatillas Vans Old Skool",
        "description":"Las Zapatillas Vans Old Skool están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida.",
        "precio":"27100",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwff03ddbe/products/VA_VN000D3HNVY/VA_VN000D3HNVY-1.JPG",
        "category":"calzado"
    },
    {
        "id":16,
        "name":"Zapatillas adidas Superstar",
        "description":"Las zapatillas Adidas Superstar no necesitan mucha presentación. Su historia hizo que dejen de ser un calzado para ser un ícono de la moda. Nacidas en los 70's para el básquet, fueron recorriendo el mundo urbano de la mano del skateboarding y principalmente el hip-hop. Estilo de sobra con el detalle de las tres tiras (three-stripes) típicas de la marca y su característica puntera de caucho.",
        "precio":"33600",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG",
        "category":"calzado"
    },
    {
        "id":17,
        "name":"Zapatillas adidas Nizza",
        "description":"Las Zapatillas adidas Nizza tienen una capellada de lona y una suela de goma son ideales para que puedas utilizarlas en tu día a día con cualquier look. Su diseño está pensando para ofrecerte un calzado de gran durabilidad y con un estilo moderno y liviano.",
        "precio":"21000",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw86cd8b41/products/AD_CQ2332/AD_CQ2332-1.JPG",
        "category":"calzado"
    },
    {
        "id":18,
        "name":"Zapatillas adidas Multix",
        "description":"Las zapatillas adidas Multix confeccionadas en exterior deportivo de malla mantiene tus pies cómodos sin importar lo que te depare del día. La suela de caucho ofrece el agarre que necesitás, mientras que el diseño deportivo con colores impactantes te dan el estilo ideal para la vida urbana.",
        "precio":"25200",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb3d9a8ff/products/AD_FX5119/AD_FX5119-1.JPG",
        "category":"calzado"
    },
    {
        "id":19,
        "name":"Zapatillas Vans U Era",
        "description":"Las zapatillas Vans U Era están confeccionadas en su parte superior de lona de doble costura duradera. Su diseño se completa con una lengüeta acolchada y la característica suela tipo Waffle con el sello de Vans.",
        "precio":"20700",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd31e9442/products/VA_VN000W3CDUM/VA_VN000W3CDUM-1.JPG",
        "category":"calzado",
    },
    {
        "id":20,
        "name":"Zapatillas Vans Old Skool",
        "description":"Las Zapatillas Vans Old Skool están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida.",
        "precio":"27100",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3c758933/products/VA_VN000KW6HR0/VA_VN000KW6HR0-1.JPG",
        "category":"calzado",
    },
    {
        "id":21,
        "name":"Zapatillas Vans Old Skool",
        "description":"Las Zapatillas Vans Old Skool están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida.",
        "precio":"27100",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw88972e72/products/VA_VN0A5KRFB09/VA_VN0A5KRFB09-1.JPG",
        "category":"calzado",
    },
    {
        "id":22,
        "name":"Zapatillas adidas Nmdr1.V2",
        "description":"Inspiradas en una de las animaciones más atrevidas, las Zapatillas adidas Nmdr1.V2 tienen un diseño audaz para rendirle homenaje. Su capellada de cuero es duradera y está diseñada para robarse todas las miradas. La mediasuela BOOST mejora el retorno de energía y aporta una comodidad superior a tu rutina, mientras que la suela de goma brinda una tracción mayor para que tu día combine moda, diseño y confort en un solo calzado.",
        "precio":"40950",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe172e0e7/products/AD_GY6163/AD_GY6163-1.JPG",
        "category":"calzado",
    },
    {
        "id":23,
        "name":"Zapatillas Vans Ultra Range Rapidweld",
        "description":"No podemos negar que la calidad de Vans brinda calzados para toda la vida, por eso las Zapatillas Vans Ultra Range Rapidweld son la mejor opción a la hora de elegir un par que te acompañe siempre. Su diseño mezcla lo urbano y lo deportivo para darles mayor versatilidad; tienen un interior sin costuras que reduce el peso y la fricción y una suela waffle invertida que aporta una mejor tracción para que todos tus pasos sean con la comodidad que mereces. Ponételas y dejá en claro quién es la dueña del estilo.",
        "precio":"41400",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf48ee00a/products/VA_VN0A5HYSAO8/VA_VN0A5HYSAO8-1.JPG",
        "category":"calzado",
    },
    {
        "id":24,
        "name":"Zapatillas adidas Nmdr V3",
        "description":"La velocidad es algo que disfrutarás en tus rutinas tanto como si estuvieras corriendo una carrera con las Zapatillas adidas Nmdr V3. Construidas en un mesh de poliéster super resistente que está hecho en al menos un 50% de contenido reciclado y una entresuela BOOST para ofrecerte una mejor respuesta a la pisada, incluso después de varios kilómetros. La suela de goma mejora la tracción en distintas superficies. ¡Este par es tan liviano que mantendrá el ritmo que le quieras dar a tus días!",
        "precio":"50400",
        "img":"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwae129fed/products/AD_GW3063/AD_GW3063-1.JPG",
        "category":"calzado",
    },
]


const ItemDetailContainer = ()=>{
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(prod)
            }, 1000);
        });
        getData.then(res =>setData(res.find(prod => prod.id === parseInt(detalleId))));


    }, [detalleId])

    return(
        <>
        <ItemDetail data = {data}/>
        </>
    );
}

export default ItemDetailContainer;