//Ürün bilgileri dizi tipindeki değişkenlere alındı.
let corbalar=["Mercimek Çorbası","13,50","Ezogelin Çorbası","13,50","Yayla Çorbası","13,50","Kelle Paça","30","Domates Çorbası (kaşarlı)","13,50"];
let etliYemekler=["Hünkarbeğendi","55","Orman kebabı","47,90","İzmir Köfte","43"];
let tavukluYemekler=["Izgara Tavuk","25","Tavuk Sote","24","Mangal Tavuk","25"];
let pilavmakarna=["Nohutlu Piriç Pilavi","15","Penne Makarna","15","Fırın Makarna","18"];
let sebzeliYemekler=["Bezelye","25","Türlü","28","Taze Fasulye","28"];
let zeytinyağlıYemekler=["Şakşuka","17","Biber Dolması(2 adet)","17","Yaprak Sarması(7 adet)","16,50"];
let mezesalata=["Mevsim Salata","15","Cacık","15","Haydari","18","Patates Püresi(kaşarlı)","16"];
let tatlı=["Kazandibi","18","Ekmek Kadayıfı","18","İrmik Helvası","15"];





//Döngü için sayaç değişkeni
let i;

//Kategori seçimine göre doldurulacak ürünlerin input ve label tanımı için
let urunAciklama,urunSecenek;

//Sepete eklenecek ürünlerin ve ürünlere ait fiyatların ayrı ayrı taşınması için
let eklenecekler=[];
let fiyatlar=[];

//Sepete ekleme,çıkarma ve boşaltma için sepet nesnesinin seçimi
let listeSepet=document.getElementById("evYemekleri");

//Ödenecek toplam tutarı başta sıfırlayarak tanımladık.
let toplamTutar=0;

//İndirim kodu için bir dizi veya değişken tanımlanabilir.
const kod="YILDIZ";

//Kategori seçiminde ürünlerin güncellenmesi için olay yakalayıcı tanımlandı.
for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}   

//Her kategori seçiminde gelecek ürünleri listeleyecek nesneler ve özellikleri tanımlandı
function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("urunPanel").appendChild(urunAciklama);
    document.getElementById("urunPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}

//Kategori seçimi yapıldıktan sonra ürün listesini(checkbox) doldurur.
function urunleriGetir(){
    //Ürün panelini her seferinde temizleyip yeniden doldurmak için 
    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }

    //Her kategoriye ait ürün içeriklerini dizi üzerinden aldık.
    if(document.getElementById("corbalar").checked)
    {
        for(i=0;i<corbalar.length;i=i+2)
        {
            olustur();
            corbalar.value=corbalar[i+1];
            urunAciklama.innerHTML=corbalar[i]; 
        }
    }
    else if(document.getElementById("etliYemekler").checked)
    {
        for(i=0;i<etliYemekler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=etliYemekler[i+1];
        urunAciklama.innerHTML=etliYemekler[i];
        }
    }
    else if(document.getElementById("tavukluYemekler").checked)
    {
        for(i=0;i<tavukluYemekler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=tavukluYemekler[i+1];
        urunAciklama.innerHTML=tavukluYemekler[i];
        }
    }
    else if(document.getElementById("pilavmakarna").checked)
    {
        for(i=0;i<pilavmakarna.length;i=i+2)
        {
        olustur();
        urunSecenek.value=pilavmakarna[i+1];
        urunAciklama.innerHTML=pilavmakarna[i];
        }
    }
    else if(document.getElementById("sebzeliYemekler").checked)
    {
        for(i=0;i<sebzeliYemekler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=sebzeliYemekler[i+1];
        urunAciklama.innerHTML=sebzeliYemekler[i];
        }
    }
    else if(document.getElementById("zeytinyağlıYemekler").checked)
    {
        for(i=0;i<zeytinyağlıYemekler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=zeytinyağlıYemekler[i+1];
        urunAciklama.innerHTML=zeytinyağlıYemekler[i];
        }
    }
    else if(document.getElementById("mezesalata").checked)
    {
        for(i=0;i<mezesalata.length;i=i+2)
        {
        olustur();
        urunSecenek.value=mezesalata[i+1];
        urunAciklama.innerHTML=mezesalata[i];
        }
    }
    else if(document.getElementById("tatlı").checked)
    {
        for(i=0;i<tatlı.length;i=i+2)
        {
        olustur();
        urunSecenek.value=tatlı[i+1];
        urunAciklama.innerHTML=tatlı[i];
        }
    }
}