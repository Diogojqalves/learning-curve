from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput(
        attrs={"placeholder": "Your title"}))
    email = forms.EmailField()
    description = forms.CharField(required=True, #required its True by default
                        widget=forms.Textarea(
                                 attrs={
                                        "class": "new-class-name two",
                                        "id": "my-id-for-textarea",
                                        "rows": 2,
                                        "columns": 4
                                        }
                                    )
                                 ) 
    price = forms.DecimalField(initial=9.99)
    class Meta:
        model = Product
        fields = [
            'title',
            'description',
            'price'
        ]
    # form validation example
    def clean_title(self, *arg, **kwargs): # validate clean_<name> param
        title = self.cleaned_data.get('title')
        if not 'CFE' in title:
            raise forms.ValidationError('This is not a valid title')
        else:
            return title
    def clean_email(self, *arg, **kwargs): # validate clean_<name> param
        email = self.cleaned_data.get('email')
        if not email.endswith("edu"):
            raise forms.ValidationError('This is not a valid email')
        else:
            return email





class RawProductForm(forms.Form):
    title = forms.CharField(widget=forms.TextInput(attrs={"placeholder": "Your title"}))
    description = forms.CharField(required=True, #required its True by default
    widget=forms.Textarea(
        attrs={
            "class": "new-class-name two",
            "id": "my-id-for-textarea",
            "rows": 2,
            "columns": 4
        }
    )) 
    price = forms.DecimalField(initial=9.99)