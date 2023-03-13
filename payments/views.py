from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse
import stripe

def create_customer(request):
    stripe.api_key = settings.STRIPE_SECRET_KEY

    # Get the email and payment source from the request data
    email = request.POST.get('email')
    payment_source = request.POST.get('payment_source')

    # Create the customer in Stripe
    customer = stripe.Customer.create(
        email=email,
        source=payment_source,
    )

    # Return a success message to the user
    return HttpResponse('Customer created successfully')
