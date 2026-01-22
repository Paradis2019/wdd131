import pytest
from names import make_full_name, extract_family_name, extract_given_name


def test_make_full_name():
    # short names
    assert make_full_name("John", "Smith") == "Smith; John"

    # long names
    assert make_full_name("Elizabeth", "Washington") == "Washington; Elizabeth"

    # hyphenated family name
    assert make_full_name("Ava", "Smith-Jones") == "Smith-Jones; Ava"


def test_extract_family_name():
    # short name
    assert extract_family_name("Smith; John") == "Smith"

    # long name
    assert extract_family_name("Washington; Elizabeth") == "Washington"

    # hyphenated family name
    assert extract_family_name("Smith-Jones; Ava") == "Smith-Jones"


def test_extract_given_name():
    # short name
    assert extract_given_name("Smith; John") == "John"

    # long name
    assert extract_given_name("Washington; Elizabeth") == "Elizabeth"

    # hyphenated family name
    assert extract_given_name("Smith-Jones; Ava") == "Ava"
