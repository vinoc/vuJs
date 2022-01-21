<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VueJsController extends AbstractController
{
    /**
     * @Route("/vuejs", name="vue_js")
     */
    public function index(): Response
    {
        return $this->render('vue_js/index.html.twig', [
            'controller_name' => 'VueJsController',
        ]);
    }
}
