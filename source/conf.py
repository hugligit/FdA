# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'FdA Learning Support'
copyright = '2024, Marcel Hrdina'
author = 'Marcel Hrdina'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
        "sphinx.ext.todo",
        "sphinx_tags",
        "sphinx_rtd_theme",
        "sphinx_toolbox.collapse",
        ]

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']


tags_create_tags = True
todo_include_todos = True
todo_link_only = True


html_theme_options = {
        'collapse_navigation': False,
        'sticky_navigation': True,
        'navigation_depth': 4,
        'titles_only': False,

        }
