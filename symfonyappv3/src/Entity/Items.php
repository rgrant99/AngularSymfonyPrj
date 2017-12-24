<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ItemsRepository")
 * @ORM\Table(name="items")
 */
class Items
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;

    /**
     * @ORM\Column(type="integer")
     */
    public $importid;

    /**
     * @ORM\Column(type="string", length=255)
     */
    public $fruit;

    /**
     * @ORM\Column(type="float")
     */
    public $latitude;

    /**
     * @ORM\Column(type="string", length=255)
     */
    public $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    public $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    public $color;

    /**
     * @ORM\Column(type="text")
     */
    public $address;


    public function getId()
    {
        return $this->id;
    }

    public function setImportid($_importid)
    {
        $this->importid = $_importid;
    }

    public function setFruit($_fruit)
    {
        $this->fruit = $_fruit;
    }

    public function setLatitude($_latitude)
    {
        $this->latitude = $_latitude;
    }

    public function setName($_name)
    {
        $this->name = $_name;
    }

    public function setEmail($_email)
    {
        $this->email = $_email;
    }

    public function setColor($_color)
    {
        $this->color = $_color;
    }

    public function setAddress($_address)
    {
        $this->address = $_address;
    }
}


?>