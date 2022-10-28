from pubnub_python_tools.services.instance import Instance
import click

class Ppt:
    def __init__(self, sk, pk, user_id):
        self.pnmg = Instance(sk, pk, user_id)
        self.pnmg = self.pnmg.get()

    @click.option('--publish', help="Channel to publish.")
    @click.option('--message', help="Message to publish.")
    def publish(self, publish, message):
        envelope = self.pnmg.publish(publish, message)
        res = str(envelope.result)
        click.echo(res)

 