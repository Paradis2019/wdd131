import pytest
from names import make_full_name, extract_family_name, extract_given_name

def test_make_full_name():
    # short names
    assert make_full_name("Sally", "Brown")=="Sally", "Brown"

    # long names
    assert make_full_name("Elizabeth", "Washington")=="Washington; Elizabeth"

    # hyphenated family name
    assert make_full_name("Ava", "Smith-Jones")=="Smith-Jones; Ava"


def test_extract_family_name():
    # short name
    assert extract_family_name("Brown; Sally")=="Brown"

    # long name
    assert extract_family_name("Washington; Elizabeth")=="Washington"

    # hyphenated family name
    assert extract_family_name("Smith-Jones; Ava")=="Smith-Jones"


def test_extract_given_name():
    # short name
    assert extract_given_name("Brown; Sally")=="Sally"

    # long name
    assert extract_given_name("Washington; Elizabeth")=="Elizabeth"

    # hyphenated family name
    assert extract_given_name("Smith-Jones; Ava")=="Ava"

    pytest.main(["-v", "--tb=line", "-rN", __file__])
