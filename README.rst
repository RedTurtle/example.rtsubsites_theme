.. contents::

Introduction
============

This is only an example Plone theme, to be used for testing in a simple way all the
`redturtle.subsites`__ features.

__ http://pypi.python.org/pypi/redturtle.subsites

For a complete list of the features, and for know how to configure properly Apache in front
of Plone, refer to the documentation.

This is a silly `Sunburst`__ extensions with:

* a different logo image
* an additional image in the logo viewlet
* a custom CSS (that make all more gray)
* a custom JavaScript (that display "Welcome To The demo")
* a customized main_template where the footer has been removed

__ http://pypi.python.org/pypi/plonetheme.sunburst

Example details
===============

Let say that you have a Plone site accessible through http://mycompany.com/ , where you didn't
applied any Plone theme (so probably Sunburst base theme).

This will be your back-end URL.

.. figure:: http://keul.it/images/plone/example.rtsubsites_theme-0.1.0-01.png
   :alt: Basic Sunburst view of the main site

   Basic Sunburst view of the main site

Accessing the Subsite
---------------------

If properly configured, when you access the **front-end URL**, you will see the new theme with all it's
customizations.

.. figure:: http://keul.it/images/plone/example.rtsubsites_theme-0.1.0-02.png
   :alt: The example theme, visiting the Subsite

   The example theme, visiting the Subsite

You can also visit a subsite sub-sections:

.. figure:: http://keul.it/images/plone/example.rtsubsites_theme-0.1.0-05.png
   :alt: The example theme, visiting a Subsite folder

   The example theme, visiting a Subsite folder

If you don't provide the optional RequestHeader
-----------------------------------------------

As said in the documentation, the use of the `Apache RequestHeader`__ can be optional for some themes.
Here how you will see the subsite if not provided properly.

__ http://httpd.apache.org/docs/2.0/mod/mod_headers.html#requestheader

.. figure:: http://keul.it/images/plone/example.rtsubsites_theme-0.1.0-03.png
   :alt: The example theme, visiting the Subsite without the proper RequestHeader

   The example theme, visiting the Subsite without the proper RequestHeader

As you can see, all CMF skins customization (site logo and main_template) are lost.

If your theme don't provide a custom viewlet logo
-------------------------------------------------

These theme provide a custom logo viewlet that properly use the redturtle.subsites basic ones, as
described in the documentation.

You need a new logo viewlet only if you need something different from Plone standard as in this example (where
we have two images in the logo).

Disabling this viewlet will show the subsite as follow:

.. figure:: http://keul.it/images/plone/example.rtsubsites_theme-0.1.0-04.png
   :alt: The example theme with disabled custom logo viewlet

   The example theme with disabled custom logo viewlet

A .conf Apache configuration file
---------------------------------

Here a part of the Apache configuration file for use this theme with a subpath (http://mycompany.com/subsite)::

    ServerName mycompany.com
    ServerAlias www.mycompany.com
    ServerAdmin ...
    
    ...
    
    RewriteEngine On
    
    SetEnvIf Request_URI "^/subsite(.*)" SUBSITE
    RequestHeader append plone_skin "redturtle.subsites.example" env=SUBSITE
    
    RewriteRule ^/(.*) \
    "http://127.0.0.1:8080/VirtualHostBase/http/%{SERVER_NAME}:80/Plone/VirtualHostRoot/$1" [L,P]
    ProxyPassReverse / http://127.0.0.1:8080/
    
    ...

Authors
=======

This product was developed by RedTurtle Technology team.

.. image:: http://www.redturtle.it/redturtle_banner.png
   :alt: RedTurtle Technology Site
   :target: http://www.redturtle.it/
