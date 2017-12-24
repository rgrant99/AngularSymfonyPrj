<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Items;
use Doctrine\ORM\EntityManagerInterface;

class MainController extends Controller
{
    
    public function defaultAction()
    {
        return new Response(
        );
    }


    public function saveitems($importid,$fruit,$latitude,$name,$email,$color,$address){

        $em = $this->getDoctrine()->getManager();
        $items = new Items();
        $items->setImportid($importid);
        $items->setFruit($fruit);
        $items->setLatitude($latitude);

        $items->setName($name);
        $items->setEmail($email);
        $items->setColor($color);
        $items->setAddress($address);

        $em->persist($items);

        $em->flush();

        $response = array(
            "response" => "true",
            "itemid" => $items->getId(),
            );

        return new Response(json_encode($response));

    }

    public function getitems(){
        $repository = $this->getDoctrine()->getRepository(Items::class);
        $items = $repository->findAll();

        return new Response(json_encode($items));
    }

    public function removeitems($id){
        $em = $this->getDoctrine()->getManager();
        $item = $em->getRepository(Items::class)->find($id);

        $em->remove($item);
        $em->flush();

        $response = array(
            "response" => "true"
            );

        return new Response(json_encode($response));
    }
}

?>